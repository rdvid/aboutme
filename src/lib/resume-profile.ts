import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { z } from 'astro/zod';
import type { ResumeProfile } from './resume-profile.types';

const YAML_PATH = resolve(process.cwd(), 'src/data/resume.timeline.yaml');

const localizedStringSchema = z.object({
  en: z.string().min(1),
  br: z.string().min(1),
});

const resumeEntrySchema = z.object({
  id: z.string().min(1),
  start: z.string().min(1),
  end: z.string().nullable(),
  organization: localizedStringSchema,
  title: localizedStringSchema,
  summary: localizedStringSchema,
  highlights: z.array(localizedStringSchema).default([]),
});

const resumeIntroSchema = z.object({
  lead: localizedStringSchema,
  paragraphs: z.array(localizedStringSchema).default([]),
  location: localizedStringSchema,
});

const resumeProfileSchema = z.object({
  intro: resumeIntroSchema,
  experience: z.array(resumeEntrySchema).default([]),
  education: z.array(resumeEntrySchema).default([]),
  skills: z
    .array(
      z.object({
        id: z.string().min(1),
        label: localizedStringSchema,
        items: z.array(z.union([z.string().min(1), localizedStringSchema])).default([]),
      }),
    )
    .default([]),
  hobbies: z.array(localizedStringSchema).default([]),
});

let cached: ResumeProfile | null = null;

export function loadResumeProfile(): ResumeProfile {
  if (cached) return cached;

  const raw = readFileSync(YAML_PATH, 'utf8');
  const parsed = parseYaml(raw);
  const result = resumeProfileSchema.safeParse(parsed);

  if (!result.success) {
    throw new Error(`[resume] Invalid resume.timeline.yaml: ${result.error.message}`);
  }

  cached = result.data;
  return cached;
}

export type {
  ResumeProfile,
  ResumeEntry,
  ResumeSkillGroup,
  ResumeIntro,
} from './resume-profile.types';
