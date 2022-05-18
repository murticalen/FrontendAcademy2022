import { BasicPlayer } from '../../model/Player'
import React from 'react'

export default function Players({players}: {players: BasicPlayer[]}) {
  return (
    <>
      {players.map(p => {
        return <div key={p.id}>{p.name}</div>
      })}
    </>
  )
}