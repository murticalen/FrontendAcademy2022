export interface BasicTeam {
    id: number
    name: string
}

export interface Score {
    display: number
}

export interface FullEvent {
    id: number
    customId: string
    homeTeam: BasicTeam
    awayTeam: BasicTeam
    homeScore: Score
    awayScore: Score
}