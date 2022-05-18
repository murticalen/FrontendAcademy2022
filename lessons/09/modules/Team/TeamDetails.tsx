import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { BasicPlayer } from '../../model/Player'
import { FullTeam } from '../../model/Team'
import Players from './Players'
import TeamHeader from './TeamHeader'
import TeamMatches from './TeamMatches'

export default function TeamDetails({team, players}: {team: FullTeam, players: BasicPlayer[]}) {

  const router = useRouter()

  return (
    <>
      <Button onClick={() => router.push('/')}>INDEX</Button>
      <TeamHeader team={team}/>
      <Players players={players}/>
      <TeamMatches id={team.id}/>
    </>
  )
}