import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";


type Props = {}

function LoginAnimation({}: Props) {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/0ed1a555-7039-41e2-a539-42be2bab9ce1/U0P1i7RifT.json"
        // style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>  )
}

export default LoginAnimation

