import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { BasicEvent } from '../../model/Event'
import TeamLink from '../Link/TeamLink'

interface EventsResponse {
  events: BasicEvent[]
}

const Event = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export default function TeamMatches({ id }: { id: number }) {

  const { data, error } = useSWR<EventsResponse>(`https://api.sofascore.com/api/v1/team/${id}/events/last/0`)

  if (!data) {
    return null
  }

  return (
    <>
      {data.events.map(event => {
        const route = `/team/${event.homeTeam.slug}/${event.homeTeam.id}`
        return (
          <Event key={event.id}>
            <Link href={route}>{event.homeTeam.name}</Link>
            VERSUS
            <TeamLink team={event.awayTeam}/>
          </Event>
        )
      })}
    </>
  )
}