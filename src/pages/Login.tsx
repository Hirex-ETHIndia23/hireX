// import React from "react";
// import { useState, useCallback, useEffect } from "react";
// import { ethers } from "ethers";
// import {
//   CardBody,
//   Card,
//   Text,
//   Button,
//   Container,
//   Stack,
// } from "@chakra-ui/react";
// import LoginAnimation from "../utils/LoginAnimation";
// import { useNavigate } from "react-router-dom";

// type Props = {};

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }

// interface AccountType {
//   address?: string;
//   balance?: string;
//   chainId?: string;
//   network?: string;
// }

// let provider: any;
// function Login({}: Props) {
//   const [accountData, setAccountData] = useState<AccountType>({});
//   const [message, setMessage] = useState<string>("");
//   const [isLoggedIn, setIsLoggedIn]=useState(false);
//   const navigate = useNavigate();

//     useEffect(() => {
//       if(isLoggedIn){
//       navigate('/dashboard');
//       setIsLoggedIn(false);
//       }
//     }, [isLoggedIn])
    

//   const connectwalletHandler = useCallback(async () => {
//     if (window.ethereum) {
//       try {
//         // Request access to the user's MetaMask accounts
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         // Get the connected Ethereum address 
//         const address = accounts[0];
//         // Create an ethers.js provider using the injected provider from MetaMask
//         const provider = new ethers.BrowserProvider(window.ethereum);


//         // Get the account balance
//         const balance = await provider.getBalance(address);
//         // Get the network ID from MetaMask
//         const network = await provider.getNetwork();
//         console.log(balance)

//         console.log("connected to MetaMask with address: ", address);
//         console.log("balance: ", ethers.formatEther(balance));
//         console.log("network: ", network);
//         console.log("chainId: ", network.chainId);
//         setAccountData({
//           address,
//           balance: ethers.formatEther(balance),
//           // The chainId property is a bigint, change to a string
//           chainId: network.chainId.toString(),
//           network: network.name,
//         });
//         setIsLoggedIn(true)
//       } catch (error: Error | any) {
//         alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
//       }
//     } else {
//       // If MetaMask is not installed, we use the default provider,
//       // which is backed by a variety of third-party services (such
//       // as INFURA). They do not have private keys installed,
//       // so they only have read-only access
//       console.log("MetaMask not installed; using read-only defaults");
//       provider = ethers.getDefaultProvider("http://localhost:3000/");
//     }
//   }, [message]);


//   const _sendMessageToMetaMask = useCallback(async () => {
//     const ethereum = await window.ethereum;
//     // Create an ethers.js provider using the injected provider from MetaMask
//     // And get the signer (account) from the provider
//     const signer = await new ethers.BrowserProvider(ethereum).getSigner();
//     try {
//       // Sign the message
//       await signer.signMessage(message);
//     } catch (error) {
//       alert("User denied message signature.");
//     }
//   }, [message]);

//   const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage(e.target.value);
//   };


//   return (
//     <Container
//       width={["100%", "50%", "70%"]}
//       height={["100%", "50%", "70%"]}
//       py={[10, 10, 20]}
//     >
//       <Card>
//         <CardBody>
//           <Stack spacing={8}>
//             <LoginAnimation />
//             <Text textAlign={["center", "center"]} fontSize="4xl" as={"b"}>
//               Join our network!
//             </Text>
//             <Button
//               onClick={connectwalletHandler}
//               size='lg'
//               bgGradient="linear(to-r, teal.500, green.700)"
//               _hover={{ bg: "teal.600" }}
//             >
//               { isLoggedIn? "Connected" : "Connect"}
//             </Button>
//           </Stack>
//         </CardBody>
//       </Card>
//     </Container>
//   );
// }

// export default Login;
import React from "react";
import { useState, useCallback } from "react";
import { ethers } from "ethers";
// import { ethers } from "hardhat";
import {
  CardBody,
  Card,
  Text,
  Button,
  Container,
  Stack,
} from "@chakra-ui/react";
import LoginAnimation from "../utils/LoginAnimation";

type Props = {};

declare global {
  interface Window {
    ethereum: any;
  }
}

interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
}

let provider: any;
function Login({}: Props) {
  const [accountData, setAccountData] = useState<AccountType>({});
  const [message, setMessage] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const connectwalletHandler = useCallback(async () => {
    if (window.ethereum) {
      try {
        // Request access to the user's MetaMask accounts
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the connected Ethereum address
        const address = accounts[0];
        console.log(address)
        // Create an ethers.js provider using the injected provider from MetaMask
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log(provider)
        // Get the account balance
        const balance = await provider.getBalance(address);
        console.log(typeof balance)
        // Get the network ID from MetaMask
        const network = await provider.getNetwork();
        console.log("connected to MetaMask with address: ", address);
        console.log("balance: ", ethers.formatEther(balance));
        console.log("network: ", network);
        console.log("chainId: ", network.chainId);

        const customValue = 1;

        // const send = await ethers.deployContract("PythonCoin", [ customValue ]);

        // await send.waitForDeployment();

        // console.log(
        //   `Send with ${ethers.formatEther(
        //     customValue
        //   )}ETH and wallet address ${address} deployed to ${send.target}`
        // );

        setAccountData({
          address,
          balance: ethers.formatEther(balance),
          // The chainId property is a bigint, change to a string
          chainId: network.chainId.toString(),
          network: network.name,
        });
        setIsLoggedIn(true)
      } catch (error: Error | any) {
        alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
      }
    } else {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed,
      // so they only have read-only access
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider("http://localhost:3000/");
    }
  }, [message]);


  const _sendMessageToMetaMask = useCallback(async () => {
    const ethereum = await window.ethereum;
    // Create an ethers.js provider using the injected provider from MetaMask
    // And get the signer (account) from the provider
    const signer = await new ethers.BrowserProvider(ethereum).getSigner();
    try {
      // Sign the message
      await signer.signMessage(message);
    } catch (error) {
      alert("User denied message signature.");
    }
  }, [message]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };


  return (
    <Container
      width={["100%", "50%", "70%"]}
      height={["100%", "50%", "70%"]}
      py={[10, 10, 20]}
    >
      <Card>
        <CardBody>
          <Stack spacing={8}>
            <LoginAnimation />
            <Text textAlign={["center", "center"]} fontSize="4xl" as={"b"}>
              Join our network!
            </Text>
            <Button
              onClick={connectwalletHandler}
              size='lg'
              bgGradient="linear(to-r, teal.500, green.700)"
              _hover={{ bg: "teal.600" }}
            >
              { isLoggedIn? "Connected" : "Connect"}
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Login;