import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const FILE = path.join(process.cwd(), 'content', 'about.md')

export interface AboutData {
  metaTitle: string
  metaDescription: string
  portraitImage: string
  portraitAlt: string
  headline: string
  introduction: string
  biography: string
}

export function getAbout(): AboutData {
  const raw = fs.readFileSync(FILE, 'utf-8')
  const { data: fm } = matter(raw)
  return {
    metaTitle: fm.metaTitle ?? 'About — Thomas Rackowe Cork',
    metaDescription: fm.metaDescription ?? '',
    portraitImage: fm.portraitImage ?? '',
    portraitAlt: fm.portraitAlt ?? '',
    headline: fm.headline ?? '',
    introduction: fm.introduction ?? '',
    biography: fm.biography ?? '',
  }
}
