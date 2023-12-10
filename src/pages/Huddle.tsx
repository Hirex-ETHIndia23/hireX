import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRoom } from "@huddle01/react/hooks";
import { Button, ButtonGroup, Container, Stack } from "@chakra-ui/react";
import { useLocalVideo, useLocalAudio } from "@huddle01/react/hooks";
import { useLocalMedia } from '@huddle01/react/hooks';

type Props = {};
const apiKey = `${process.env.REACT_APP_API_KEY}`;

function Huddle({}: Props) {
  const [roomId, setRoomId] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const { joinRoom, leaveRoom } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });
  const { fetchStream } = useLocalMedia();


  const { stream, enableVideo, disableVideo, changeVideoSource } =
    useLocalVideo();

  const addr = "0x997fe6EfC448FAb4A38c10ae69D1F72CCcf14C26";
  const createMeetingRoom = () => {
    axios
      .post(
        "https://api.huddle01.com/api/v1/create-room",
        {
          title: "Huddle01-Test",
          hostWallets: ["0xdB60aBc605825AE6BC95ad32891E383E4Ea3e3fd"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
        }
      )
      .then(({ message, data }: any) => {
        console.log(data.data.roomId);
        setRoomId(data.data.roomId);
        setMeetingLink(data.data.meetingLink);
      })
      .then(() => {
        console.log(accessToken);
        console.log(roomId);
      });
  };
  useEffect(() => {
    //if user is eligible
    createMeetingRoom();
  }, []);

  useEffect(() => {
    //if user is eligible
    if (roomId != "") {
      getAccessToken();
    }
  }, [roomId]);

  const getAccessToken = async () => {
    // const dataRead = fs.readFileSync('addr.txt', 'utf-8');
    // console.log(apiKey, roomId);
    const accessToken = new AccessToken({
      apiKey,
      roomId: roomId,
      role: Role.HOST,
      permissions: {
        admin: true,
        canConsume: true,
        canProduce: true,
        canProduceSources: {
          cam: true,
          mic: true,
          screen: true,
        },
        canRecvData: true,
        canSendData: true,
        canUpdateMetadata: true,
      },
      options: {
        metadata: {
          // you can add any custom attributes here which you want to associate with the user
          walletAddress: addr,
        },
      },
    });

    const token = await accessToken.toJwt();

    setAccessToken(token);
  };

  return (
    <div>
      <Container>
        <Stack direction="row" spacing={4} py={12}>
          <Button
            colorScheme="teal"
            onClick={() => {
              if (accessToken !== "" && roomId !== "") {
                joinRoom({ roomId, token: accessToken });
              }
            }}
          >
            Join Room
          </Button>
          <Button colorScheme="teal" onClick={() => leaveRoom()}>
            Leave Room
          </Button>
          </Stack>
          <Stack direction="row" spacing={4} py={3}>
          <Button onClick={() => enableVideo()}>Fetch and Produce Video Stream</Button>
          <Button 
          onClick={() => fetchStream({ mediaDeviceKind: 'cam' })} >
          Fetch Cam Stream
          </Button>
          </Stack>
      </Container>
    </div>
  );
}

export default Huddle;
