import { Link } from "@remix-run/react";

export type EpisodeItem = {
  ["dc:creator"]: string;
  description: string;
  enclosure: {
    ["@length"]: number;
    ["@type"]: string;
    ["@url"]: string;
  };
  guid: {
    ["#text"]: string;
  };
  ["itunes:duration"]: string;
  ["itunes:episode"]: number;
  ["itunes:episodeType"]: string;
  ["itunes:explicit"]: string;
  ["itunes:image"]: {
    ["@href"]: string;
  };
  ["itunes:season"]: number;
  ["itunes:summary"]: string;
  link: string;
  pubDate: string;
  title: string;
};

export const EpisodeList = (props: {
  episodeList: EpisodeItem[];
  podcastName: string;
}) => {
  return (
    <div>
      {props.episodeList.map((d) => {
        return (
          <div key={d.enclosure["@url"]}>
            <Link
              to={`/content/${props.podcastName}/${encodeURIComponent(
                d.guid["#text"]
              )}`}
            >
              {d.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
