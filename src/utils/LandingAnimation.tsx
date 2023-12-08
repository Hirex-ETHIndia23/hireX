import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

type Props = {};

export default function Animation({}: Props) {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/8d9d16cb-ec42-4e21-8718-b7dcbc0c02a1/2vJBbjTebz.json"
        // style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
