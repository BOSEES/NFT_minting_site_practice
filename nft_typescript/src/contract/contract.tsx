import {ethers, providers} from "ethers";
import Onboard from "bnc-onboard";

type Contracts = {
    networkId: number;
    init: (networkId: number) => void;
    connect: (address: string) => void;
}

// export const contracts: Contract = {
//     networkId: null,
//     wallet: null,
//     signers: {},
//     init(networkId) {
//         if (networkId) {
//             this.networkId = networkId;
//         } else {
//             return false;
//         }

//         this.provider = new providers.JsonRpcProvider("rpcUrl", networkId);
//     }
// }

// head to blocknative.com to create a key
const BLOCKNATIVE_KEY: string = 'blocknative-api-key';

// the network id that your dapp runs on
const NETWORK_ID: number = 1;

type OnboardType = () => void;
// initialize onboard
const onboard = Onboard({
  dappId: BLOCKNATIVE_KEY,
  networkId: NETWORK_ID,
  subscriptions: {
    wallet: wallet => {
      // instantiate web3 when the user has selected a wallet
      web3 = new (wallet.provider)
      console.log(`${wallet.name} connected!`)
    }
  }
})

// Prompt user to select a wallet
// await onboard.walletSelect()

// Run wallet checks to make sure that user is ready to transact
// await onboard.walletCheck()