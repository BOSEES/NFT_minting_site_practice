import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { onboard } from './contract/contract';
import './App.css';

function App() {
  const [address, networkId] = useState<string>();

  useEffect(() => {

  })

  const handleConnect = () => {
    onboard.walletSelect();
    onboard.walletCheck();
  }

  return (
    <>
      <button onClick={handleConnect}>connect</button>
    </>
  );
}

export default App;
