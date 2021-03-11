require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name riot stereo erosion idea kiwi equal genre'; 
let testAccounts = [
"0x5731ba58b599ca6166a38a9e378d74cb0d7e9f1c651d2259d3a5569492d75bd7",
"0x94e4b2a78a220b9b3019f2333840ffc870cdef2479a9e7f0502c5509ecf41e5a",
"0x98ba6e06dff24520e71523767b54836626979801b0ab8b050724f9cd0bb9ee28",
"0x5d8c512765e3c768959bbfc8216cb243a4b09981941dd4005b214eea8152f9bd",
"0xcef2cb31255544bf378af1ba80d3f4b39ebfb99280c9f8ba40a4dee3767e5702",
"0xb64b3c371e9859336c66b0b4ea7878b697f4fafda99db3c1491c252fe9a12386",
"0x7cc1e8f70f181d92e336b0feb4c1cbe220551cdf5e09287ae8c1447978a53aaa",
"0xf42947253bbaab5131e66901eb451a4fe794d6558878300d181f5dcdb3c7ef0c",
"0x74ed637326dcb4c37725e993c49175ca9fc70ef61f8f7f6adc9875b878cec451",
"0xdf15e12e451b6919ea9fe23e73ab6e47eded66bd69db834fd85490d956336598"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
