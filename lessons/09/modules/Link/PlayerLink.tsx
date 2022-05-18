import Link from 'next/link'
import React from 'react'
import { BasicPlayer } from '../../model/Player'

interface P {
  player: BasicPlayer
}

export default function PlayerLink({player, children}: React.PropsWithChildren<P>) {
  return (
    <Link href={{
      pathname: '/player/[slug]/[id]',
      query: {slug: player.slug, id: player.id},
    }}>{children || player.name}</Link>
  )
}