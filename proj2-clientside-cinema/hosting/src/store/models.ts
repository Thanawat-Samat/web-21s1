import firebase from 'firebase/app'

type Timestamp = firebase.firestore.Timestamp

export interface Cinema {
  id: string
  name: string
  city: string
  slug: string
}

export interface Film {
  id: string
  slug: string
  title: string
}

export interface Screening {
  id: string
  cinemaName: string
  cinemaSlug: string
  date: Timestamp
  filmName: string
  filmSlug: string
  layout: string
  screen: string
  seatsAvailable: string[]
  seatsUnavailable: string[]
  slug: string
  timeString: string
}

export interface Ticket {
  id: string
  cinemaName: string
  createdAt: Timestamp
  date: Timestamp
  filmName: string
  screen: string
  screeningSlug: string
  seats: string[]
  timeString: string
}
