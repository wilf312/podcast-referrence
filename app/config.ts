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

  {
    name: "朝日新聞　ニュースの現場から",
    hash: "ニュースの現場から",
    url: "https://www.omnycontent.com/d/playlist/1e3bd144-9b57-451a-93cf-ac0e00e74446/50382bb4-3af3-4250-8ddc-ac0f0033ceb5/684015f9-2396-4ac4-bc1f-ac0f0033d08c/podcast.rss",
  },

  {
    name: "Repeat Rhyme / リピートライム",
    hash: "RepeatRhyme",
    url: "https://anchor.fm/s/9d4c028c/podcast/rss",
  },

  {
    name: "青いTシャツ24時　-シン現代農業論-",
    hash: "青T24時",
    url: "https://anchor.fm/s/1c76584c/podcast/rss",
  },

  {
    name: "ほっとテック",
    hash: "ほっとテック",
    url: "https://anchor.fm/s/86693634/podcast/rss",
  },

  {
    name: "Zero Topic - ゼロトピック -",
    hash: "ゼロトピ",
    url: "https://anchor.fm/s/1617b040/podcast/rss",
  },

  {
    name: "オールデイアメリカ",
    hash: "一日三善",
    url: "https://anchor.fm/s/88052e44/podcast/rss",
  },

  {
    name: "ひとくちPKI",
    hash: "ひとくちPKI",
    url: "https://anchor.fm/s/42b89b8c/podcast/rss",
  },

  {
    name: "furoshiki.fm",
    hash: "furoshiki_fm",
    url: "https://anchor.fm/s/50bf64f4/podcast/rss",
  },

  {
    name: "歴史を面白く学ぶコテンラジオ （COTEN RADIO）",
    hash: "COTENRADIO",
    url: "https://anchor.fm/s/8c2088c/podcast/rss",
  },

  {
    name: "ハッピートークバラエティ「よかった探し」",
    hash: "よかった探し",
    url: "https://anchor.fm/s/426cb1f4/podcast/rss",
  },

  {
    name: "超相対性理論",
    hash: "超相対性理論",
    url: "https://anchor.fm/s/57a9101c/podcast/rss",
  },

  // {
  //   name: "名無しさんのポッドキャスト",
  //   hash: "nanapo",
  //   url: "https://feeds.buzzsprout.com/1154831.rss",
  // },

  {
    name: "エンジニアと人生",
    hash: "エンジニアと人生",
    url: "https://pitpa.jp/rss/shu223",
  },

  {
    name: "Wantedly Engineering Podcast",
    hash: "Wantedly_Engineering_Podcast",
    url: "https://anchor.fm/s/64205bfc/podcast/rss",
  },

  {
    name: "ALL STAR SAAS PODCAST",
    hash: "#allstarsaas",
    url: "https://anchor.fm/s/4960aa9c/podcast/rss",
  },

  {
    name: "Basuke's Tech Talk",
    hash: "basuke",
    url: "https://anchor.fm/s/4cf7e15c/podcast/rss",
  },

  {
    name: "火曜日のおフロ",
    hash: "火曜日のおフロ",
    url: "https://anchor.fm/s/2b3dd74c/podcast/rss",
  },

  {
    name: "イシュミラジオ",
    hash: "イシュミラジオ",
    url: "https://feed.podbean.com/isyumi/feed.xml",
  },

  {
    name: "たまにデザインFM",
    hash: "たまデザFM",
    url: "https://anchor.fm/s/216ede50/podcast/rss",
  },

  {
    name: "Submits.life",
    hash: "submitslife",
    url: "https://www.submits.life/feed.xml",
  },

  {
    name: "Kyashfm",
    hash: "kyashfm",
    url: "https://anchor.fm/s/4d007e0c/podcast/rss",
  },

  {
    name: "NeuroRadio",
    hash: "NeuroRadio",
    url: "https://anchor.fm/s/4ddf5488/podcast/rss",
  },

  {
    name: "Background.radio",
    hash: "bgradio",
    url: "https://anchor.fm/s/4a05f894/podcast/rss",
  },

  {
    name: "ポッドキャストアワード観覧席",
    hash: "ポッドキャストアワード観覧席",
    url: "https://anchor.fm/s/471fb318/podcast/rss",
  },

  {
    name: "研エンの仲",
    hash: "研エンの仲",
    url: "https://anchor.fm/s/2631f634/podcast/rss",
  },

  {
    name: "J-WAVE TOPPAN INNOVATION WORLD ERA",
    hash: "era813",
    url: "https://feeds.sonicbowl.cloud/rss/901233053125/5b61db6f-925a-42cb-b1bb-e54f185b19ab/",
  },

  {
    name: "omoiyari.fm (lean-agile podcast)",
    hash: "omoiyarifm",
    url: "http://feeds.feedburner.com/omoiyarifm/",
  },

  {
    name: "hikifune.fm",
    hash: "hikifunefm",
    url: "https://anchor.fm/s/8d50d4c/podcast/rss",
  },

  {
    name: "転職透明化ラジオ",
    hash: "転職透明化ラジオ",
    url: "https://anchor.fm/s/146371bc/podcast/rss",
  },

  {
    name: "mookjp のパソコンサタデーナイト",
    hash: "パソコンサタデーナイト",
    url: "https://anchor.fm/s/328a780c/podcast/rss",
  },

  {
    name: "Today I Learned",
    hash: "TodayILearned",
    url: "https://anchor.fm/s/367f0040/podcast/rss",
  },

  {
    name: "セキュリティのアレ",
    hash: "セキュリティのアレ",
    url: "https://www.tsujileaks.com/?feed=rss2",
  },

  {
    name: "46fm",
    hash: "46fm",
    url: "http://46fm.seike460.com/rss.xml",
  },

  {
    name: "jamming.fm",
    hash: "jammingfm",
    url: "https://anchor.fm/s/6c008db0/podcast/rss",
  },

  {
    name: "texta.fm",
    hash: "textafm",
    url: "https://anchor.fm/s/330a9488/podcast/rss",
  },

  {
    name: "Off Topic // オフトピック",
    hash: "OffTopic",
    url: "https://anchor.fm/s/7369a14/podcast/rss",
  },

  {
    name: "Web Rush",
    hash: "webrush",
    url: "https://feeds.simplecast.com/tOjNXec5",
  },

  {
    name: "Secure Liaison",
    hash: "secure旅団",
    url: "https://anchor.fm/s/2607ca1c/podcast/rss",
  },

  {
    name: "AirSap",
    hash: "AirSap",
    url: "https://airsap.net/feed/podcast/",
  },

  {
    name: "いんよう！",
    hash: "いんよう",
    url: "https://anchor.fm/s/576104c/podcast/rss",
  },

  {
    name: "銀の弾丸ラジオ",
    hash: "SilverBulletClub",
    url: "https://anchor.fm/s/13df46f8/podcast/rss",
  },

  {
    name: "Yokohama North AM",
    hash: "yokohamanortham",
    url: "https://anchor.fm/s/1e60bd50/podcast/rss",
  },

  {
    name: "FREE AGENDA by hikaru & yamotty",
    hash: "フリーアジェンダ",
    url: "https://anchor.fm/s/147f7150/podcast/rss",
  },

  {
    name: "「話し方」のハナシ",
    hash: "話し方のハナシ",
    url: "https://hanashi.koelab.net/feed/podcast/",
  },

  {
    name: "ノウカノタネ",
    hash: "ノウカノタネ",
    url: "https://anchor.fm/s/1c8e7878/podcast/rss",
  },

  {
    name: "Researchat.fm",
    hash: "researchatfm",
    url: "https://researchat.fm/feed.xml",
  },

  {
    name: "STILL RENDERING // スティレン",
    hash: "スティレン",
    url: "https://anchor.fm/s/40a74b4/podcast/rss",
  },

  {
    name: "はなれより。",
    hash: "はなれより",
    url: "https://anchor.fm/s/c2e46e8/podcast/rss",
  },

  {
    name: "中村繪里子・吉田尚記の本格雑談くちをひらく",
    hash: "くちをひらく",
    url: "https://www.omnycontent.com/d/playlist/67122501-9b17-4d77-84bd-a93d00dc791e/bf2b4e95-c669-4e1c-abcf-a98c00a5f513/b923e360-dc05-438d-be85-a98c00a5f517/podcast.rss",
  },

  {
    name: "楽しいラジオ「ドングリFM」",
    hash: "ドングリFM",
    url: "http://feeds.soundcloud.com/users/soundcloud:users:170031062/sounds.rss",
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
): UrlListItemAndHashEncoded | undefined => {
  const urlListItemAndHashEncodedList = getEncodedUrl();
  return urlListItemAndHashEncodedList.find((d) => {
    return hashEncoded === d.hash;
  });
};
