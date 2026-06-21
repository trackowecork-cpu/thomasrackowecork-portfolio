import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DIR = path.join(process.cwd(), 'content', 'case-studies')

export interface Metric {
  value: string
  label: string
  note: string
}

export interface Decision {
  n: string
  title: string
  body: string
}

export interface NextProject {
  title: string
  slug: string
  company: string
  timeframe: string
}

export interface Challenge {
  quote: string
  body: string
  items: string[]
  statement: string | null
}

export interface Solution {
  intro: string
  decisions: Decision[]
}

export interface Impact {
  intro: string
  metrics: Metric[]
  items: string[]
  statement: string | null
}

export interface CaseVisual {
  src: string
  alt?: string
  caption?: string
  layout?: 'full' | 'full-natural' | 'contained' | 'two-col'
  placement?: 'after-hero' | 'after-overview' | 'after-challenge' | 'after-solution' | 'after-impact' | 'after-reflection'
}

export interface CaseStudyData {
  slug: string
  title: string
  subtitle: string
  company: string
  role: string
  timeframe: string
  heroImage: string
  heroImageAlt: string
  heroBackground: string
  status: string | null
  inProgressBadge: boolean
  overview: string
  challenge: Challenge | null
  solution: Solution | null
  impact: Impact | null
  pullQuote: string | null
  reflection: string | null
  nextProject: NextProject | null
  visuals: CaseVisual[]
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'))
    .map(f => f.replace('.md', ''))
}

export function getCaseStudy(slug: string): CaseStudyData | null {
  const filePath = path.join(DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data: fm } = matter(raw)

  return {
    slug,
    title:           fm.title           ?? '',
    subtitle:        fm.subtitle        ?? '',
    company:         fm.company         ?? '',
    role:            fm.role            ?? '',
    timeframe:       fm.timeframe       ?? '',
    heroImage:       fm.heroImage       ?? '',
    heroImageAlt:    fm.heroImageAlt    ?? '',
    heroBackground:  fm.heroBackground  ?? '#0E0D0C',
    status:          fm.status          ?? null,
    inProgressBadge: fm.inProgressBadge ?? false,
    overview:        fm.overview        ?? '',
    challenge:       fm.challenge       ?? null,
    solution:        fm.solution        ?? null,
    impact:          fm.impact          ?? null,
    pullQuote:       fm.pullQuote       ?? null,
    reflection:      fm.reflection      ?? null,
    nextProject:     fm.nextProject     ?? null,
    visuals:         fm.visuals         ?? [],
  }
}
