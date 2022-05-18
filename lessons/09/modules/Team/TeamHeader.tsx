import { FullTeam } from '../../model/Team'
import React from 'react'

export default function TeamHeader({team}: {team: FullTeam}) {
  return (<div>
    <div>{team.name}</div>
    <img src={`https://api.sofascore.com/api/v1/team/${team.id}/image`} alt=""/>
  </div>)
}