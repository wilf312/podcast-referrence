import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { XMLParser } from "fast-xml-parser";

const rssList = [
  // "https://anchor.fm/s/319a2820/podcast/rss",
  "https://action-ten.vercel.app/arkb.xml",
  // "https://anchor.fm/s/319a2820/podcast/rss",
  // "https://feeds.rebuild.fm/rebuildfm",
  // "https://anchor.fm/api/v3/episodes/e1mqfl9", // 末尾がunique
];

// import Parser from "rss-parser";
// const parser = new Parser();

const rss = async () => {
  const res = await fetch(rssList[0], {
    method: "GET",
    mode: "cors",
    credentials: "omit",
  }).then((res) => res.text());

  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  const jObj = parser.parse(res);

  const master = jObj.rss[0].channel;

  return master;
};

const anchor = async () => {
  const res = await fetch(rssList[0], {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,ja;q=0.8,ko;q=0.7",
      range: "bytes=0-",
      "sec-ch-ua":
        '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "audio",
      "sec-fetch-mode": "no-cors",
      "sec-fetch-site": "cross-site",
    },
    referrer: "https://podcasts.apple.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "omit",
  }).then((res) => res.json());

  return res;
};

export const loader: LoaderFunction = async ({ request }) => {
  const master = await rss();
  console.log(master);

  return json(master);
  return json(master.item);
  // rssをパース
  // データを更新
  //
  // let jsonFeed = {};
  // const feed = await parser.parseURL(rssList[0]);
  // const items = feed.items.map((data) => {
  //   return data;
  // });
  // jsonFeed = items;
  // console.log(jsonFeed);
  // writeFileSync("src/rss/data.json", JSON.stringify(jsonFeed));
};
