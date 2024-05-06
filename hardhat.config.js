require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();
require("fs");
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const alchemyUrl = process.env.ALCHEMY_URL;
const accounts = process.env.ACCOUNTS;
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    sepolia: {
      url: alchemyUrl,
      accounts: [accounts],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },

  etherscan: {
    apiKey: etherscanApiKey,
  },
};
