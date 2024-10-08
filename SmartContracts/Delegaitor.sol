// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DelegaitorToken is ERC20, ERC20Burnable, Ownable {
    mapping(address => uint256) private _lockedBalances;
    mapping(address => bool) private _hasClaimed;

    uint256 public constant CLAIM_AMOUNT = 10 * 10**18; // 10 токенов
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1 миллиард токенов

    uint256 private _currentTotalSupply;

    event TokensClaimed(address indexed user, uint256 amount);
    event TokensLocked(address indexed user, uint256 amount);
    event TokensUnlocked(address indexed user, uint256 amount);

    constructor()
        ERC20("Delegaitor Token", "DELEGA")
        Ownable(msg.sender)
    {
    }

    function claim() public {
        require(!_hasClaimed[msg.sender], "Tokens already claimed");
        require(_currentTotalSupply + CLAIM_AMOUNT <= MAX_SUPPLY, "Exceeds max supply");
        
        _hasClaimed[msg.sender] = true;
        _mint(msg.sender, CLAIM_AMOUNT);
        _currentTotalSupply += CLAIM_AMOUNT;
        emit TokensClaimed(msg.sender, CLAIM_AMOUNT);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(_currentTotalSupply + amount <= MAX_SUPPLY, "Exceeds max supply");
        _mint(to, amount);
        _currentTotalSupply += amount;
    }

    function burn(uint256 amount) public override {
        super.burn(amount);
        _currentTotalSupply -= amount;
    }

    function burnFrom(address account, uint256 amount) public override {
        super.burnFrom(account, amount);
        _currentTotalSupply -= amount;
    }

    function lockTokens(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Not enough tokens to lock");
        _transfer(msg.sender, address(this), amount);
        _lockedBalances[msg.sender] += amount;
        emit TokensLocked(msg.sender, amount);
    }

    function unlockTokens(uint256 amount) public {
        require(_lockedBalances[msg.sender] >= amount, "Not enough tokens locked");
        _lockedBalances[msg.sender] -= amount;
        _transfer(address(this), msg.sender, amount);
        emit TokensUnlocked(msg.sender, amount);
    }

    function _update(address from, address to, uint256 amount) internal virtual override {
        if (from != address(0)) {
            uint256 fromBalance = balanceOf(from);
            require(fromBalance - amount >= _lockedBalances[from], "Transfer amount exceeds available balance due to locked tokens");
        }
        super._update(from, to, amount);
    }

    function lockedBalanceOf(address account) public view returns (uint256) {
        return _lockedBalances[account];
    }

    function hasClaimed(address account) public view returns (bool) {
        return _hasClaimed[account];
    }

    function currentTotalSupply() public view returns (uint256) {
        return _currentTotalSupply;
    }
}
