import { FullPlayer } from '../../model/Player'
import React from 'react'
import PlayerHeader from './components/PlayerHeader'

export default function PlayerDetails({player}: {player: FullPlayer}) {
  return (
    <PlayerHeader player={player}/>
  )
}