export type UrlListItem = {
  name: string;
  hash: string;
  url: string;
};

export type UrlListItemAndHashEncoded = UrlListItem & { hashEncoded: string };

export const urlList: UrlListItem[] = [
  {
    name: "あらBfm",
    hash: "arkbfm",
    url: "https://anchor.fm/s/319a2820/podcast/rss",
  },
  {
    name: "メディアヌップ",
    hash: "メディアヌップ",
    url: "https://anchor.fm/s/51c8e3c/podcast/rss",
  },
  {
    name: "rebuild",
    hash: "rebuildfm",
    url: "https://feeds.rebuild.fm/rebuildfm",
  },
];

/**
 * hashをエンコードしたデータを作成
 * @returns
 */
export const getEncodedUrl = (): UrlListItemAndHashEncoded[] => {
  return urlList.map((d) => {
    return {
      ...d,
      hashEncoded: encodeURI(d.hash),
    };
  });
};

export const findPodcastConfig = (
  hashEncoded: string
): UrlListItem | undefined => {
  const urlListItemAndHashEncodedList = getEncodedUrl();
  return urlListItemAndHashEncodedList.find((d) => {
    return hashEncoded === d.hash;
  });
};
