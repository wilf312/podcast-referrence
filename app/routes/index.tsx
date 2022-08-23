import { useEffect, useMemo, useState } from "react";

export default function Index() {
  const [data, setData] = useState({});
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    fetch("/api/update")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setEpisodeList(data.item);
      });
  }, []);

  const e = useMemo(() => {
    return episodeList.map((d) => {
      console.log(d);
      return {
        publishOnUnixTimestamp: d.publishOnUnixTimestamp,
        title: d.title,
        pubDate: d.pubDate,
        enclosure: d.enclosure,
        src: d.enclosure["@_url"],
        length: d.enclosure["@_length"],
        episodeEnclosureUrl: d.episodeEnclosureUrl,
        duration: d.duration,
        duration: d.duration,
      };
    });
  }, [episodeList]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      {e.at(0)?.src && <audio controls src={e.at(0).src} key={e.at(0).src} />}
      {/* {e.map((e) => {
        return <audio src={e.src} key={e.src} />;
      })} */}

      {/* 
{
    "publishOnUnixTimestamp": 1661174892,
    "created": "2022-08-22T13:26:49.000Z",
    "createdUnixTimestamp": 1661174809,
    "isDeleted": false,
    "modified": "2022-08-22T13:28:32.000Z",
    "publishOn": "2022-08-22T13:28:12.000Z",
    "hourOffset": -9,
    "podcastEpisodeIsExplicit": false,
    "podcastEpisodeType": "full",
    "podcastEpisodeUuid": "7a503497-7b8c-4a65-802e-cadf90b44f02",
    "podcastSeasonNumber": 2,
    "description": "<p>センケイさん、あらBさん、ピージェイでおたより、メタ認知、おすすめアニメ・漫画・ゲーム、最小労力で食事をする、などについて話しました。</p>\n00:00:00 おたより：ハンドルネーム・IDの由来\n00:09:44 メタ認知が趣味\n\n わわっぴさん <a href=\"https://anchor.fm/arkbfm/episodes/Ep--22-Director-of-Kebab-e14867i/a-a63rqco\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Ep. 22</a>\n <a href=\"https://m.youtube.com/playlist?list=PLYpy4kJmEo758lzeXwOtQhBZvngS9mrPN\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Aqours</a>\n 生産性を高めるための解釈をとる\n 自己物語論\n  ナラティブアプローチとオープンダイアローグ\n\n00:30:27 オススメのアニメ・ドラマ\n\n  <a href=\"https://kyotoanimation.co.jp/kotenbu/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">氷菓</a>の処世術とメタ認知\n  <a href=\"https://aozora.gr.jp/cards/001124/files/42934_16419.html\" target=\"_blank\" rel=\"ugc noopener noreferrer\">阿Ｑ正伝</a>\n  <a href=\"https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%88%E3%83%AC%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%BB%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B9_%E6%9C%AA%E7%9F%A5%E3%81%AE%E4%B8%96%E7%95%8C\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Stranger Things</a> を <a href=\"https://chrome.google.com/webstore/detail/language-reactor/hoombieeljmmljlkjmnheibnpciblicm?hl=ja\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Language Reactor</a> を使った同時字幕で観て英語の勉強\n\n00:50:08 オススメ漫画\n\n  宝石の国 の複雑性\n  市川春子作品集 <a href=\"https://anchor.fm/arkbfm/episodes/Ep--44-Cold-people-should-do-podcasts-e1bv646/a-a74iv07\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Ep. 44</a>\n\n00:55:02 オススメゲーム\n\n  <a href=\"https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Civilization VI</a>\n  <a href=\"https://store.steampowered.com/app/1133120/Ecosystem/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Ecosystem</a>\n  <a href=\"https://store.steampowered.com/app/294100/RimWorld/?l=japanese\" target=\"_blank\" rel=\"ugc noopener noreferrer\">RimWorld</a>\n  <a href=\"https://automaton-media.com/articles/newsjp/20220628-208543/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">ハーヴェステラ</a>\n\n01:14:57 オススメ最小労力の食事\n\n  <a href=\"https://comp.jp/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">COMP</a>\n  <a href=\"https://nishikiya-shop.com/\" target=\"_blank\" rel=\"ugc noopener noreferrer\">NISHIKIYA KITCHEN</a>\n  <a href=\"https://ameblo.jp/intoxication-ameba/entry-12715080555.html\" target=\"_blank\" rel=\"ugc noopener noreferrer\">まいばすけっとの寄せ鍋</a>\n  サイコロさんのラッコ推し <a href=\"https://anchor.fm/arkbfm/episodes/Ep--18-Never-stop-at-a-red-light-e11qddq/a-a5nhkmp\" target=\"_blank\" rel=\"ugc noopener noreferrer\">Ep. 18</a>\n  <a href=\"https://twitter.com/xiPJ/status/1544258024898195456\" target=\"_blank\" rel=\"ugc noopener noreferrer\">サイコロさんとラッコの絵を描くぴじぇ</a>\n  <a href=\"https://twitter.com/nakamurakihiro/status/1230798247989366784\" target=\"_blank\" rel=\"ugc noopener noreferrer\">頭が赤い魚を食べる猫</a>\n\n01:33:51 おすすめ活動：勉強会、沼津まで歩く\n\n  Discord で勉強会やっているので、興味ある方はセンケイさん／あらBさん／ピジェのいずれかにお声掛けください。ROM 専で様子を見ていただくのも歓迎です！\n  1号線を何時間も歩く\n  ボードゲーム <a href=\"https://bodoge.hoobby.net/games/tokaido\" target=\"_blank\" rel=\"ugc noopener noreferrer\">東海道</a>\n  好きな歌の歌詞をわざと真に受けてみる\n\n<p>ぜひ Podcast を聴いた感想をお寄せください。ハッシュタグは <a href=\"https://twitter.com/search?q=%23arkbfm&amp;src=typed_query&amp;f=live\" target=\"_blank\" rel=\"ugc noopener noreferrer\">#arkbfm</a>です。</p>\nEditorial Notes\n\n  そういえば最近日清の完全メシを食べまして、油そばは胃腸が若くないと無理！と思いましたが、カレーは普通に美味しかったです。（文責：ピジェ）\n  最近ハローフレッシュというドイツ発の食材とレシピが送られてくるサービスの無料枠をお試してみました。残念ながら料理の手間に労力かかる印象でした〜（あらB）\n  私も完全メシ気になります。あと「33種類の栄養素とおいしさ」と聞いてふつう「33種類の栄養素と33種類のおいしさ」とパースされない理由も気になりますね。（センケイ）\n",
    "descriptionPreview": "センケイさん、あらBさん、ピージェイでおたより、メタ認知、おすすめアニメ・漫画・ゲーム、最小労力で食事をする、などについて話しました。\n00:00:00 おたより：ハンドルネーム・IDの由来\n00:09:44 メタ認知が趣味\n\n わわっぴさん Ep. 22\n Aqours\n 生産性を高めるための解釈をとる\n 自己物語論\n  ナラティブアプローチとオープンダイアローグ\n\n00:30:27 オススメのアニメ・ドラマ\n\n  氷菓の処世術とメタ認知\n  阿Ｑ正伝\n  Stranger Things を Language Reactor を使った同時字幕で観て英語の勉強\n\n00:50:08 オススメ漫画\n\n  宝石の国 の複雑性\n  市川春子作品集 Ep. 44\n\n00:55:02 オススメゲーム\n\n  Civilization VI\n  Ecosystem\n  RimWorld\n  ハーヴェステラ\n\n01:14:57 オススメ最小労力の食事\n\n  COMP\n  NISHIKIYA KITCHEN\n  まいばすけっとの寄せ鍋\n  サイコロさんのラッコ推し Ep. 18\n  サイコロさんとラッコの絵を描くぴじぇ\n  頭が赤い魚を食べる猫\n\n01:33:51 おすすめ活動：勉強会、沼津まで歩く\n\n  Discord で勉強会やっているので、興味ある方はセンケイさん／あらBさん／ピジェのいずれかにお声掛けください。ROM 専で様子を見ていただくのも歓迎です！\n  1号線を何時間も歩く\n  ボードゲーム 東海道\n  好きな歌の歌詞をわざと真に受けてみる\n\nぜひ Podcast を聴いた感想をお寄せください。ハッシュタグは #arkbfmです。\nEditorial Notes\n\n  そういえば最近日清の完全メシを食べまして、油そばは胃腸が若くないと無理！と思いましたが、カレーは普通に美味しかったです。（文責：ピジェ）\n  最近ハローフレッシュというドイツ発の食材とレシピが送られてくるサービスの無料枠をお試してみました。残念ながら料理の手間に労力かかる印象でした〜（あらB）\n  私も完全メシ気になります。あと「33種類の栄養素とおいしさ」と聞いてふつう「33種類の栄養素と33種類のおいしさ」とパースされない理由も気になりますね。（センケイ）\n",
    "duration": 6635808,
    "episodeId": "e1mqfl9",
    "episodeImage": "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded/8221864/8221864-1630245508319-c5be7ed1d65a.jpg",
    "shareLinkPath": "/arkbfm/episodes/Ep--69-2-Mental-Weather-Forecast-e1mqfl9",
    "shareLinkEmbedPath": "/arkbfm/embed/episodes/Ep--69-2-Mental-Weather-Forecast-e1mqfl9",
    "stationId": "319a2820",
    "title": "Ep. 69-2 Mental Weather Forecast",
    "isMT": false,
    "spotifyUrl": "https://open.spotify.com/episode/6VLMrsvOoUFXif8bVpg6MQ"
  },
*/}
      <pre>{JSON.stringify(e, null, 2)}</pre>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
