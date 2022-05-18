import { BasicPlayer } from './Player'
import { Tournament, UniqueTournament } from './Tournament'

export interface BasicTeam {
  id: number
  slug: string
  name: string
}

export interface FullTeam extends BasicTeam {
  tournament?: Tournament
  primaryUniqueTournament?: UniqueTournament
}

export interface TeamPlayer {
  player: BasicPlayer
  jerseyNumber?: number
}