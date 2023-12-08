// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract PythonCoin is ERC20, Ownable {
//     // Custom value relative to ETH for PythonCoin
//     uint256 public customValue;

//     // Event emitted when the custom value is updated
//     event CustomValueUpdated(uint256 newCustomValue);

//     // Constructor to initialize PythonCoin with a custom name, symbol, and initial supply
//     constructor(
//         string memory _name,
//         string memory _symbol,
//         uint256 initialSupply,
//         uint256 _customValue
//     ) ERC20(_name, _symbol) {
//         _mint(msg.sender, initialSupply);
//         customValue = _customValue;
//     }

//     // Function to update the custom value (only owner can call this)
//     function updateCustomValue(uint256 newCustomValue) external onlyOwner {
//         customValue = newCustomValue;
//         emit CustomValueUpdated(newCustomValue);
//     }

//     // Function to get the current value of PythonCoins in ETH
//     function getTokenValueInEth(uint256 amount) external view returns (uint256) {
//         return amount * customValue;
//     }

//     // Override the transfer function to adjust the value transferred based on customValue
//     function _transfer(
//         address sender,
//         address recipient,
//         uint256 amount
//     ) internal override {
//         uint256 adjustedAmount = amount * customValue;
//         super._transfer(sender, recipient, adjustedAmount);
//     }
// }
