import {ethers, providers} from "ethers";
import Onboard from "bnc-onboard";

type Contracts = {
    networkId: string;
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
const BLOCKNATIVE_KEY: string = "9b4abb26-ed55-4f5b-a94b-c0b1a63a9fb8";

// the network id that your dapp runs on
const NETWORK_ID = 1;

// initialize onboard
export const onboard = Onboard({
  dappId: BLOCKNATIVE_KEY,
  networkId: NETWORK_ID,
  subscriptions: {
    wallet: wallet => {
        if (wallet.provider) {
            wallet = wallet;
        }
      console.log(`${wallet.name} connected!`)
    }
  }
})



// Prompt user to select a wallet
// await onboard.walletSelect()

// Run wallet checks to make sure that user is ready to transact
// await onboard.walletCheck()