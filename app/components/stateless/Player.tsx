import { useRef, useEffect } from "react";

export const Player = (props: { src: string }) => {
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
    <audio controls src={props.src} ref={audioRef} style={{ width: "95vw" }} />
  );
};
