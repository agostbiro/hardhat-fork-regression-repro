require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        blockNumber: 19515370
      }
    }
  }
};
