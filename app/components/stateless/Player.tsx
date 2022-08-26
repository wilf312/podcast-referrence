import { useRef, useEffect } from "react";

type props = {
  src: string;
  tweetUrl: string;
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
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.addEventListener("timeupdate", a);

    audioRef.current.currentTime =
      parseInt(new URL(location.href).searchParams.get("s"), 10) || 0;
    return () => document.removeEventListener("timeupdate", a);
  }, [audioRef.current]);

  return (
    <div>
      <audio
        controls
        src={props.src}
        ref={audioRef}
        style={{ width: "95vw" }}
      />
      <a href={props.tweetUrl} target="_blank" rel="noreferrer">
        ツイーヨ
      </a>
    </div>
  );
};
