import React from "react";

interface PlayerProps {
  keyId: string;
}

const Player = ({ keyId }: PlayerProps) => {
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const playerWidth = screenWidth - 100;

  return (
    <div id="container">
      <iframe
        id="ytplayer"
        width={playerWidth}
        height={(playerWidth * 9) / 16}
        src={`https://www.youtube.com/embed/${keyId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
