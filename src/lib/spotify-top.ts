import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type {
  SpotifyApiTrack,
  SpotifyTopJsonFile,
  SpotifyTopPayload,
  SpotifyTopTrack,
} from './spotify-top.types';

/** Paste a Spotify top-tracks API response here (no Spotify API at build/runtime). */
const DATA_PATH = resolve(process.cwd(), 'src/data/spotify-top.json');

function emptyPayload(): SpotifyTopPayload {
  return { tracks: [] };
}

function pickImageUrl(track: SpotifyApiTrack): string | null {
  const images = track.album?.images ?? [];
  if (!images.length) return null;
  // Prefer ~300px when available; fall back to largest listed.
  const mid = images.find((img) => (img.height ?? 0) === 300);
  return mid?.url ?? images[0]?.url ?? null;
}

function normalizeTrack(item: SpotifyApiTrack, index: number): SpotifyTopTrack | null {
  if (!item?.id || !item.name) return null;
  const artists = (item.artists ?? [])
    .map((a) => a.name)
    .filter(Boolean)
    .join(', ');
  return {
    id: item.id,
    name: item.name,
    artists: artists || 'Unknown artist',
    album: item.album?.name ?? '',
    imageUrl: pickImageUrl(item),
    spotifyUrl: item.external_urls?.spotify ?? `https://open.spotify.com/track/${item.id}`,
    rank: index + 1,
  };
}

function isSpotifyTopJson(data: unknown): data is SpotifyTopJsonFile {
  return Boolean(data && typeof data === 'object' && Array.isArray((data as SpotifyTopJsonFile).items));
}

/** Load committed Spotify top-tracks JSON (`{ items: [...] }`). Sync — no network. */
export function loadSpotifyTopTracks(): SpotifyTopPayload {
  if (!existsSync(DATA_PATH)) {
    console.warn(`[spotify] Missing ${DATA_PATH}; showing empty list.`);
    return emptyPayload();
  }

  try {
    const raw = readFileSync(DATA_PATH, 'utf8');
    const data = JSON.parse(raw) as unknown;
    if (!isSpotifyTopJson(data)) {
      console.warn('[spotify] Expected { items: [...] } in spotify-top.json; showing empty list.');
      return emptyPayload();
    }

    const tracks = (data.items ?? [])
      .map((item, index) => normalizeTrack(item, index))
      .filter((t): t is SpotifyTopTrack => t !== null);

    return { tracks };
  } catch (err) {
    console.warn('[spotify] Could not read spotify-top.json:', err);
    return emptyPayload();
  }
}

export type { SpotifyTopPayload, SpotifyTopTrack } from './spotify-top.types';
