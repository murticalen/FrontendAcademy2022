import { BasicTeam } from './Team'

export interface BasicPlayer {
  id: number
  slug: string
  name: string
}

export interface FullPlayer extends BasicPlayer {
  team: BasicTeam
}