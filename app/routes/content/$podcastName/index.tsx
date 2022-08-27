import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { EpisodeList } from "~/components/stateless/EpisodeList";
import { Player } from "~/components/stateless/Player";
import { findPodcastConfig } from "~/config";

export const loader: LoaderFunction = async ({ params, request }) => {
  console.log(request.url);
  const url = new URL(request.url);
  // const podcast = await fetch(
  //   `${url.origin}/api/get/${params.podcastName}`
  // ).then((res) => res.json());

  const config = findPodcastConfig(params.podcastName || "");

  const getJSON = async (hashEncoded: string) => {
    const url = `https://action-ten.vercel.app/${hashEncoded}.json`;
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    }).then((res) => {
      return res.json();
    });
    return res;
  };

  const podcast = config?.hashEncoded ? getJSON(config.hashEncoded) : {};

  return json({
    config,
    params,
    podcast,
  });
};
export default function Index() {
  const data = useLoaderData<typeof loader>();

  throw data;

  console.log({ data });

  const episodeList = data.podcast.item;
  const episode = episodeList && episodeList[0] ? episodeList[0] : null;
  console.log({ episode });

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
