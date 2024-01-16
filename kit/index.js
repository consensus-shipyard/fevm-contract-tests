const request = require("sync-request");
const { ethers } = require("ethers");

// Setup testing environment
const defaultNodeUrl = "http://127.0.0.1:8545";

function initNode(filAmount, blockTimeMs) {
    return defaultNodeUrl;
}

function sendFil(accounts, amount) {
    return;
}

module.exports = {
  initNode,
  sendFil,
};
