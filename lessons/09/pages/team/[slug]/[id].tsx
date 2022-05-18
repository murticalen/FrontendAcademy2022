import { GetServerSideProps } from "next";
import { FullTeam, TeamPlayer } from '../../../model/Team'
import TeamDetails from "../../../modules/Team/TeamDetails";
import fetcher from "../../../util/fetch";

interface TeamPageInterface {
  details: FullTeam
  players: TeamPlayer[]
}

export default function TeamPage(props: TeamPageInterface) {

  const {details, players} = props

  return <main><TeamDetails team={details} players={players}/></main>;
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

    // const [details, players] = await Promise.all([
    //   fetcher(`https://api.sofascore.com/api/v1/team/${id}`),
    //   fetcher(`https://api.sofascore.com/api/v1/team/${id}/players`),
    // ]);

    const details = await fetcher(`https://api.sofascore.com/api/v1/team/${id}`)
    const players = await fetcher(`https://api.sofascore.com/api/v1/team/${id}/players`)

    const props: TeamPageInterface = {details: details.team, players: players.players || []}

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
