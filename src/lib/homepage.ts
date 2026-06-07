import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const FILE = path.join(process.cwd(), 'content', 'homepage.md')

export interface HomepageProject {
  n: string
  title: string
  summary: string
  company: string
  year: string
  status?: string
  href: string
}

export interface HomepageData {
  metaTitle: string
  hero: { label: string; headline: string; body: string }
  projects: HomepageProject[]
  about: { image: string; imageAlt: string; teaser: string }
}

export function getHomepage(): HomepageData {
  const raw = fs.readFileSync(FILE, 'utf-8')
  const { data: fm } = matter(raw)
  return {
    metaTitle: fm.metaTitle ?? 'Thomas Rackowe Cork — Product Designer',
    hero: fm.hero ?? { label: '', headline: '', body: '' },
    projects: fm.projects ?? [],
    about: fm.about ?? { image: '', imageAlt: '', teaser: '' },
  }
}
