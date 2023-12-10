import { ethers } from 'hardhat';

async function main() {

    let coins: string[] = ['PythonCoin', 'JavaCoin', 'CloudCoin', 'NetCoin', 'RustCoin'];

    for (let index = 0; index < 5; index++) {

        const send = await ethers.getContractFactory(coins[index]);

        const sendToken = await send.deploy('0xdB60aBc605825AE6BC95ad32891E383E4Ea3e3fd');

        await sendToken.waitForDeployment

        const address = await sendToken.getAddress();

        console.log(`${coins[index]} deployed to:`, address);

        const txn = await sendToken.mint("0xa0aE4128aC1782c4788642D78d9BbeBBC0b17EF6", 100000000000000000000n);

        console.log("Transaction hash for Account 2:", txn.hash);

        const txn2 = await sendToken.mint("0xe9C71b23CD263C540c73938b2976BF7327C0d8df", 100000000000000000000n);

        console.log("Transaction hash for Account 3:", txn2.hash);

        const txn3 = await sendToken.mint("0xEAd7E764Bfb33e4A86229F1Fb371eEA719244DC1", 100000000000000000000n);

        console.log("Transaction hash for Account 4:", txn3.hash);

        const txn4 = await sendToken.mint("0xf38971E23C5c4792705Ff93812Ac7d287214b718", 100000000000000000000n);

        console.log("Transaction hash for Account 5:", txn4.hash);

        await txn.wait();     
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });