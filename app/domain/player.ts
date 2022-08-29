import { useRef, useEffect, useState, useMemo } from "react";

export const usePlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  /**
   * タイミング: プレイヤー再生時
   * やること: URLに秒数を入れた状態にする ＋ 状態を更新する
   */
  const onTimeUpdate = () => {
    const currentTime = audioRef.current?.currentTime;
    if (currentTime) {
      const _floored = Math.floor(currentTime);
      const url = `${location.pathname}${`?s=${_floored}`}`;
      // https://developer.mozilla.org/ja/docs/Web/API/History/replaceState
      history.replaceState(null, "", url);
      setCurrentTime(_floored);
    }
  };
  /**
   * when: usePlayer読み込みしたあと、audioRef.currentが存在するとき
   * action: queryの ?s=10 を parseして audioの現在の再生時間に10を設定する
   */
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    const secondForLocationSearch =
      new URL(location.href).searchParams.get("s") || "0";

    audioRef.current.currentTime = parseInt(secondForLocationSearch, 10) || 0;

    setCurrentTime(audioRef.current.currentTime);
  }, [audioRef.current?.currentTime]);

  // const search = currentTime ? `?s=${currentTime}` : "";

  return {
    audioRef,
    onTimeUpdate,
    currentTime,
  };
};

export const useTweetLink = (props: {
  hash: string;
  episodeNo: number | null;
  currentTime: number | null;
}) => {
  const tweetLink = useMemo(() => {
    let href = "";
    if (!global.location) {
      return "";
    }
    href = global.location.href;
    const text = encodeURIComponent(
      `${href} #${props.hash}${props.episodeNo ? `.${props.episodeNo}` : ""}`
    );
    return `https://twitter.com/intent/tweet?text=${text}`;
  }, [props.hash, props.episodeNo, props.currentTime]);

  return tweetLink;
};
