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

  if (error) {
    return null
  }
  if (!data) {
    return <div style={{ backgroundColor: 'grey', height: '600px', width: '300px' }}>PLACEHOLDER</div>
  }

  return (
    <>
      {data.events.map(event => {
        return (
          <Event key={event.id}>
            <Link href={`/team/${event.homeTeam.slug}/${event.homeTeam.id}`}>
              <div style={{ color: 'red', cursor: 'pointer' }}>{event.homeTeam.name}</div>
            </Link>
            VERSUS
            <TeamLink team={event.awayTeam}>
              <div style={{ color: 'green', cursor: 'pointer' }}>{event.awayTeam.name}</div>
            </TeamLink>
          </Event>
        )
      })}
    </>
  )
}