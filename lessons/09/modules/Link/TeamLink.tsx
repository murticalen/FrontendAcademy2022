import Link from 'next/link'
import React from 'react'
import { BasicTeam } from '../../model/Team'

interface P {
  team: BasicTeam
}

export default function TeamLink({team, children}: React.PropsWithChildren<P>) {
  return (
    <Link href={{
      pathname: '/team/[slug]/[id]',
      query: {slug: team.slug, id: team.id},
    }}>{children || team.name}</Link>
  )
}