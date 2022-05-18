import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { FullTeam, TeamPlayer } from '../../model/Team'
import Players from './Players'
import TeamHeader from './TeamHeader'
import TeamMatches from './TeamMatches'

export default function TeamDetails({team, players}: {team: FullTeam, players: TeamPlayer[]}) {

  const router = useRouter()

  return (
    <>
      <Button onClick={() => router.push('/')}>INDEX</Button>
      <TeamHeader team={team}/>
      <div style={{marginTop: '20px'}}/>
      <TeamMatches id={team.id}/>
      <div style={{marginTop: '20px'}}/>
      <Players players={players}/>
    </>
  )
}