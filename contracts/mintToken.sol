// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract PythonCoin is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("PythonCoin", "PTC")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract JavaCoin is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("JavaCoin", "PTC")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract CloudCoin is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("CloudCoin", "PTC")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract NetCoin is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("NetCoin", "PTC")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract RustCoin is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("RustCoin", "PTC")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
