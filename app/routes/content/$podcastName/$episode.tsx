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

  console.log(data);

  const episodeList = data.podcast.item;
  const episode = episodeList.find((d: EpisodeItem) => {
    return (
      `${d["itunes:episode"]}` === data.params.episode ||
      d.guid["#text"] === decodeURIComponent(data.params.episode)
    );
  });

  let search = "";
  if (global.location) {
    search = location.search;
  }
  const text = encodeURIComponent(
    `${data.href}${search} #${data?.config?.hash}`
  );
  const tweetLink = `https://twitter.com/intent/tweet?text=${text}`;

  return (
    <div>
      <h1>{data?.podcast?.title}</h1>

      {episode && (
        <Player src={episode.enclosure["@url"]} tweetUrl={tweetLink} />
      )}
      <EpisodeList
        episodeList={episodeList}
        podcastName={data.params.podcastName}
      />
    </div>
  );
}
