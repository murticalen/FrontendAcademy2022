import React from 'react'
import { FullPlayer } from '../../../model/Player'
import TeamLink from '../../Link/TeamLink'

export default function PlayerHeader({player}: {player: FullPlayer}) {
  console.log(player)
  return (
    <>
      <div>{player.name}</div>
      <TeamLink team={player.team}/>
    </>
  )
}