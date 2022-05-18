export interface Tournament {
  id: number
  slug: string
  name: string
  uniqueTournament: UniqueTournament
}

export interface UniqueTournament {
  id: number
  slug: string
  name: string
}