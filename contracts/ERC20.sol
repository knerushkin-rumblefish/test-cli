// contracts/ERC20.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol" as Openzeppelin;
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20 is Openzeppelin.ERC20, Ownable {
    constructor(string memory name, string memory symbol) Openzeppelin.ERC20(name, symbol) {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
