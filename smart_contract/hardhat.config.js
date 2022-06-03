require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Y6lOixPf2sXbvhko7eEaAG1MC_DolytC',
      accounts: ['87f3cc062c598a15b17c3b321e8df9a3376eb1e857f72da69f137dbb414da8d7']
    }
  }
}