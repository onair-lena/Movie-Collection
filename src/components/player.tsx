import React from "react";

interface PlayerProps {
  keyId: string;
  width: number;
}

const Player = ({ keyId, width }: PlayerProps) => {
  return (
    <div id="container">
      <iframe
        id="ytplayer"
        width={width}
        height={(width * 9) / 16}
        src={`https://www.youtube.com/embed/${keyId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
