// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract MyNFT is ERC721 {
//     uint256 public nextTokenId;

//     constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
//         nextTokenId = 1;
//     }

//     function mint(address to) external  {
//         uint256 tokenId = nextTokenId;
//         _safeMint(to, tokenId);
//         nextTokenId++;
//     }
// }

// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "contracts/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ExampleNFT is ERC721URIStorage {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;

   constructor() ERC721("NFT", "ENFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public 
       returns (uint256)
   {
       _tokenIds.increment();

       uint256 newItemId = _tokenIds.current();
       _mint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);

       return newItemId;
   }
}