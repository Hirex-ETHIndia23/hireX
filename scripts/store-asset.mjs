import { NFTStorage, File } from "nft.storage";
import * as fs from 'fs/promises';
import * as dotenv from 'dotenv';
dotenv.config();

const { NFT_STORAGE_API_KEY } = process.env;

async function storeAsset() {
  if (!NFT_STORAGE_API_KEY) {
    console.error("NFT_STORAGE_API_KEY is missing in the environment variables.");
    process.exit(1);
  }

  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });

  try {
    const metadata = await client.store({
      name: 'LOGOROUND',
      description: 'My LOGOROUND is an awesome artwork!',
      image: new File(
        [await fs.readFile('src/assets/logoround.png')],
        'logoround.png',
        { type: 'image/png' }
      ),
    });

    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
  } catch (error) {
    console.error("Error storing asset:", error);
    process.exit(1);
  }
}

storeAsset()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
