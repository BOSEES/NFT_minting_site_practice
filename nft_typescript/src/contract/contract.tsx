import {ethers, providers} from "ethers";
import Onboard from "bnc-onboard";

declare var window: any

const provider = new ethers.providers.Web3Provider(
  window.ethereum,
  "any"
);
provider.send("eth_requestAccount", []);
const signer = provider.getSigner();

export let userAddress = signer.getAddress();
export let blockNumber = provider.getBlockNumber();


// type Contracts = {
//     networkId: string;
//     init: (networkId: number) => void;
//     connect: (address: string) => void;
// }

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
            console.log();
        }
      console.log(`${wallet.name} connected!`)
    },
    address: address => {
      console.log(address);
    },
    network: network => {
      console.log(network);
    }
  }
})



// Prompt user to select a wallet

// Run wallet checks to make sure that user is ready to transact
// await onboard.walletSelect()
// await onboard.walletCheck()