import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { EpisodeList } from "~/components/stateless/EpisodeList";
import { Player } from "~/components/stateless/Player";
export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const podcast = await fetch(
    `${url.origin}/api/get/${params.podcastName}`
  ).then((res) => res.json());

  return json({
    params,
    podcast,
  });
};
export default function Index() {
  const data = useLoaderData<typeof loader>();

  const episodeList = data.podcast.item;
  const episode = episodeList.at(0);

  return (
    <div>
      <h1>{data?.podcast?.title}</h1>

      {episode && <Player src={episode.enclosure["@url"]} />}
      <EpisodeList
        episodeList={episodeList}
        podcastName={data.params.podcastName}
      />
    </div>
  );
}
