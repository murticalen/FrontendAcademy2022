import { GetServerSideProps } from 'next'
import React from 'react'
import { FullPlayer } from '../../../model/Player'
import PlayerDetails from '../../../modules/Player/PlayerDetails'
import fetcher from '../../../util/fetch'

interface PlayerPageProps {
  player: FullPlayer
}

export default function PlayerPage(props: PlayerPageProps) {
  return <PlayerDetails player={props.player}/>
}

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;

  try {
    //@ts-ignore
    const { slug, id } = params;
    const details = await fetcher(`https://api.sofascore.com/api/v1/player/${id}`)

    const props: PlayerPageProps = {player: details.player}

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
