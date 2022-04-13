import React from "react";
import * as S from './styles'
import useSWR from "swr";
import { FullEvent } from "../../model/SofaScore";

type MatchDetailsResponse = {
    event: FullEvent
}

export default function Match({id}: {id: number}) {

    const {data, error} = useSWR<MatchDetailsResponse>(`https://api.sofascore.com/api/v1/event/${id}`, {refreshInterval: undefined})

    if (!data && !error) {
        return (<div>Loading...</div>)
    }
    if (!data) { // if (error)
        return (<div>An error has occurred...</div>)
    }

    return (
        <S.MatchContainer isWorlcCupFinal={id === 7693131}>
            {`${data.event.homeTeam.name} ${data.event.homeScore.display} - ${data.event.awayScore.display} ${data.event.awayTeam.name}`}
        </S.MatchContainer>
    )
}