import pkg from 'hardhat';
const { ethers } = pkg;


async function deployContract() {
    const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
    const exampleNFT = await ExampleNFT.deploy()
    const tx = exampleNFT.deployTransaction;
    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = tx.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contract deployed to address:", contractAddress)
   }
   
   deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });