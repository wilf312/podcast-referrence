import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { EpisodeList } from "~/components/stateless/EpisodeList";
import type { EpisodeItem } from "~/components/stateless/EpisodeList";
import { Player } from "~/components/stateless/Player";
import { findPodcastConfig } from "~/config";
import { getPodcast } from "~/api";

export const loader: LoaderFunction = async ({ params, request }) => {
  const podcast = await getPodcast(params.podcastName || "");
  const config = findPodcastConfig(params.podcastName || "");

  return json({
    href: request.url,
    config,
    params,
    podcast,
  });
};
export default function Index() {
  const data = useLoaderData<typeof loader>();

  const episodeList = data.podcast.item;
  const episode: EpisodeItem | null = episodeList.find((d: EpisodeItem) => {
    return d.guid["#text"] === decodeURIComponent(data.params.episode);
  });

  return (
    <div>
      <h1>{episode?.title}</h1>
      <h2>{data?.podcast?.title}</h2>

      {episode && (
        <Player
          hash={data.params.podcastName}
          title={episode?.title}
          episodeNo={episode["itunes:episode"]}
          src={episode.enclosure["@url"]}
        />
      )}
      <EpisodeList
        episodeList={episodeList}
        podcastName={data.params.podcastName}
      />
    </div>
  );
}
