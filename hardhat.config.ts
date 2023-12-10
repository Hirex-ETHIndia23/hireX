import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  // defaultNetwork: "PolygonMumbai",
  // networks: {
  //   hardhat: {
  //     // You can leave this empty for the default Hardhat network setup
  //   },
  //   PolygonMumbai: {
  //     url: "https://rpc-mumbai.maticvigil.com",
  //     accounts: [PRIVATE_KEY as string], // Adjust the type assertion based on your use case
  //   },
  // },
  defaultNetwork: "FileCoinCalibration",
  networks: {
    hardhat: {
      // You can leave this empty for the default Hardhat network setup
    },
    FileCoinCalibration: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY as string], // Adjust the type assertion based on your use case
    },
    PolygonMumbai: {
          url: "https://rpc-mumbai.maticvigil.com",
          accounts: [PRIVATE_KEY as string], // Adjust the type assertion based on your use case
        },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },}},
};

export default config;
