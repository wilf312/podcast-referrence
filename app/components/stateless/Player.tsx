import { usePlayer } from "~/domain/player";

type props = {
  src: string;
  hash: string;
  episodeNo: number;
};
export const Player = (props: props) => {
  const player = usePlayer({ hash: props.hash, episodeNo: props.episodeNo });
  console.log({ player, aaa: player.tweetLink, props });

  return (
    <div>
      <audio
        controls
        src={props.src}
        ref={player.audioRef}
        style={{ width: "95vw" }}
        onTimeUpdate={player.onTimeUpdate}
      />
      {player.tweetLink && (
        <a href={`${player.tweetLink}`} target="_blank" rel="noreferrer">
          ツイート
        </a>
      )}
    </div>
  );
};
