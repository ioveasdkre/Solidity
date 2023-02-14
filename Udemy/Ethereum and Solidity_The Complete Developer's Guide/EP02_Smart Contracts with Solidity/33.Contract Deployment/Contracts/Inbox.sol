// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17; // 導入指定 solidity版本

// 合約
contract Inbox {
    string public message;
    
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }
}