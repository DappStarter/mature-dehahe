require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rate noble around half civil army genuine'; 
let testAccounts = [
"0x1b446c7b945f570e015e7da7079369fdb530c40c1780bc08caf3ef7947678d99",
"0x13115680aa386104af373316235c61a3af2089b429e865f057da65931f9bed32",
"0x759acc47d6743a0b888b0543423128921751d6bf6f9dd5c2dfa0e42c31c6ce35",
"0x3ee54f24a71a37b41ca1e2902abe13d300312b4de16e3c1095c95eac1b5583ee",
"0x84c2769ecc1651d8c32691ed4192c3d92e3bc699340cae40f3392fe60a8f2de1",
"0x5ca12ef6962df648cd38fa0b5f03e8a31b9545cb95aa3fa84f3e2cef743c3987",
"0x3ed94f9e5eba49a278b64cbc70071ab5dd2c1c15a84a9cd601d8bc1a2e9465fa",
"0x9b0195c761d339dc048b2b3179fbb9dc6cf9a6303bc2b0b28d2e401151fdae49",
"0x58545c7a46e7b571412bd7db9e05fc10ab10ed5e97763bdc142075276d995129",
"0x7c9210522088bdf9722e10d83d101c8414ffe354c5a6365a38f309b80d0e587f"
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
