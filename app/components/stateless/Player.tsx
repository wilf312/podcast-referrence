import { useRef, useEffect } from "react";

type props = {
  src: string;
  tweetUrl: string;
  onPlay?: () => void;
};
export const Player = (props: props) => {
  const audioRef = useRef<HTMLAudioElement>();

  const a = () => {
    const currentTime = audioRef.current?.currentTime;
    const url = `${location.pathname}${
      currentTime ? `?s=${Math.floor(currentTime)}` : ""
    }`;
    // https://developer.mozilla.org/ja/docs/Web/API/History/replaceState
    history.replaceState(null, "", url);
  };
  /**
   * when: audioRef.currentが存在するとき
   * action: queryの ?s=10 を parseして audioの現在の再生時間に10を設定する
   */
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime =
      parseInt(new URL(location.href).searchParams.get("s"), 10) || 0;
  }, [audioRef.current]);

  return (
    <div>
      <audio
        controls
        src={props.src}
        ref={audioRef}
        style={{ width: "95vw" }}
        onTimeUpdate={a}
        onPlay={props.onPlay}
      />
      <a href={props.tweetUrl} target="_blank" rel="noreferrer">
        ツイーヨ
      </a>
    </div>
  );
};
