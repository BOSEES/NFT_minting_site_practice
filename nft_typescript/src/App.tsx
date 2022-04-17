import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { userAddress,blockNumber,onboard } from './contract/contract';
import './App.css';

function App() {
  const [address, networkId] = useState<string>();
  const [test, setTest]  = useState();

  useEffect(() => {

  })

  const handleConnect = () => {
    userAddress.then((res) => {
      return console.log(res)
    });

    blockNumber.then(res => {
      return console.log(res);
    })
  }

  const handleOnboard = async () => {
    await onboard.walletSelect()
    await onboard.walletCheck()
  }

  return (
    <>
      <button onClick={handleConnect}>connect</button>
      <button onClick={handleOnboard}>onboard</button>
    </>
  );
}

export default App;
