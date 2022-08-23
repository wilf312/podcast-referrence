import { useMemo, useRef, useEffect } from "react";
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
  console.log(data);

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

  const episode = e.find(
    (d) => d.episode === parseInt(data.params.episode, 10)
  );

  const audioRef = useRef<HTMLAudioElement>();
  const a = () => {
    const currentTime = audioRef.current?.currentTime;
    const url = `${location.pathname}${
      currentTime ? `?s=${Math.floor(currentTime)}` : ""
    }`;
    // https://developer.mozilla.org/ja/docs/Web/API/History/replaceState
    history.replaceState(null, "", url);
  };
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.addEventListener("timeupdate", a);

    audioRef.current.currentTime =
      new URL(location.href).searchParams.get("s") | 0;
    return () => document.removeEventListener("timeupdate", a);
  }, [audioRef.current]);

  return (
    <div>
      <h1>{data?.podcastName}</h1>

      {episode && audioRef && (
        <audio controls src={episode.src} key={episode.src} ref={audioRef} />
      )}
      {e.map((e, i) => {
        return (
          <div key={i}>
            <Link to={`/content/${data.params.podcastName}/${e.episode}`}>
              {e.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
