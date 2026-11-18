/** Display shape used by About page UI. */
export type SpotifyTopTrack = {
  id: string;
  name: string;
  artists: string;
  album: string;
  imageUrl: string | null;
  spotifyUrl: string;
  rank: number;
};

export type SpotifyTopPayload = {
  tracks: SpotifyTopTrack[];
};

/** Spotify Web API top-tracks (or similar) dump committed as spotify-top.json. */
export type SpotifyApiArtist = {
  name?: string;
};

export type SpotifyApiImage = {
  url?: string;
  height?: number | null;
  width?: number | null;
};

export type SpotifyApiAlbum = {
  name?: string;
  images?: SpotifyApiImage[];
};

export type SpotifyApiTrack = {
  id?: string;
  name?: string;
  artists?: SpotifyApiArtist[];
  album?: SpotifyApiAlbum;
  external_urls?: { spotify?: string };
};

export type SpotifyTopJsonFile = {
  items?: SpotifyApiTrack[];
  total?: number;
  limit?: number;
  offset?: number;
  href?: string | null;
  next?: string | null;
  previous?: string | null;
};
