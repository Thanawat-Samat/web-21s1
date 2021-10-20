export interface Athlete {
  slug: string
  name: string
  teamSlug: string
  team: string
  age: number
  gender: string
}

export interface Entry {
  slug: string
  name: string
  teamSlug: string
  team: string
  lane: number
  pb100: string
  pb200: string
  sb100: string
  sb200: string
}

export interface Result {
  slug: string
  name: string
  teamSlug: string
  order: number
  rank: number
  distance: string
  record: string
  attempts: string
}

export interface Sport {
  slug: string
  name: string
  eventCount: number
  description: string
}

export interface Team {
  slug: string
  rank: number
  name: string
  countFirst: number
  countSecond: number
  countThird: number
  countTotal: number
  introduction: string
}
