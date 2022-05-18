import React from 'react'
import { TeamPlayer } from '../../model/Team'
import PlayerLink from '../Link/PlayerLink'

export default function Players({players}: {players: TeamPlayer[]}) {
  return (
    <>
      {players.map(p => {
        return <PlayerLink key={p.player.id} player={p.player}><div style={{color: 'blue', cursor: 'pointer'}}>{p.player.name}</div></PlayerLink>
      })}
    </>
  )
}