import { useMemo } from "react";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const podcast = await fetch(`${url.origin}/api/update`).then((res) =>
    res.json()
  );

  return json({
    params,
    podcast,
  });
};
export default function Index() {
  const data = useLoaderData<typeof loader>();

  const main = data.podcast;
  const episodeList = data.podcast.item;

  const e = useMemo(() => {
    return episodeList.map((d) => {
      return {
        publishOnUnixTimestamp: d.publishOnUnixTimestamp,
        title: d.title,
        pubDate: d.pubDate,
        enclosure: d.enclosure,
        src: d.enclosure["@_url"],
        length: d.enclosure["@_length"],
        episode: d["itunes:episode"],
      };
    });
  }, [episodeList]);

  const episode = e.at(0);

  return (
    <div>
      <h1>{data?.podcastName}</h1>

      {episode && <audio controls src={episode.src} key={episode.src} />}
      {e.map((e, i) => {
        return (
          <div key={i}>
            <Link to={`/content/${data?.podcastName}/${e.episode}`}>
              {e.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
