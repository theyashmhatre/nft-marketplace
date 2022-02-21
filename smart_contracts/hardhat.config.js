require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/HHYAcM0efDC21kzHvCm4LWZcIdi5PdRl",
      accounts: ['your_privatekey_here'],
    },
  },
};