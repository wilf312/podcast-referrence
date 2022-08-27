import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { EpisodeList } from "~/components/stateless/EpisodeList";
import { Player } from "~/components/stateless/Player";
import { findPodcastConfig } from "~/config";
import { getPodcast } from "~/api";

export const loader: LoaderFunction = async ({ params }) => {
  const podcast = await getPodcast(params.podcastName || "");
  const config = findPodcastConfig(params.podcastName || "");

  return json({
    config,
    params,
    podcast,
  });
};
export default function Index() {
  const data = useLoaderData<typeof loader>();

  console.log({ data });

  const episodeList = data.podcast.item;
  const episode = episodeList.at(0);

  const text = encodeURIComponent(`${data.href} ${data?.config?.hash}`);
  const tweetLink = `https://twitter.com/intent/tweet?text=${text}`;
  return (
    <div>
      <h1>{data?.podcast?.title}</h1>

      {episode && (
        <Player
          src={episode.enclosure["@url"]}
          tweetUrl={tweetLink}
          onPlay={() => {
            console.log("onPlay");

            const url = `${location.pathname}${
              episode["itunes:episode"] ||
              encodeURIComponent(episode.guid["#text"])
            }`;
            // https://developer.mozilla.org/ja/docs/Web/API/History/replaceState
            history.replaceState(null, "", url);
          }}
        />
      )}
      <EpisodeList
        episodeList={episodeList}
        podcastName={data.params.podcastName}
      />
    </div>
  );
}
