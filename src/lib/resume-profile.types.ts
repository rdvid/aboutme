import type { Lang } from '../i18n/ui';

export type LocalizedString = Record<Lang, string>;

export type ResumeHighlight = LocalizedString;

export type ResumeEntry = {
  id: string;
  start: string;
  end: string | null;
  organization: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  highlights: ResumeHighlight[];
};

/** Plain string = same in all locales (tech names). Localized = soft labels. */
export type ResumeSkillItem = string | LocalizedString;

export type ResumeSkillGroup = {
  id: string;
  label: LocalizedString;
  items: ResumeSkillItem[];
};

export type ResumeHobby = LocalizedString;

export type ResumeIntro = {
  lead: LocalizedString;
  paragraphs: LocalizedString[];
  location: LocalizedString;
};

export type ResumeProfile = {
  intro: ResumeIntro;
  experience: ResumeEntry[];
  education: ResumeEntry[];
  skills: ResumeSkillGroup[];
  hobbies: ResumeHobby[];
};
