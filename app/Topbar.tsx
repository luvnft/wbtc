// Topbar.tsx

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { EtherContext } from './EtherProvider';

export function Topbar() {
  const { account, loadWeb3Modal, getWBTCBalance } = useContext(EtherContext);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (account) {
      getWBTCBalance(account).then(setBalance);
    }
  }, [account, getWBTCBalance]);

  return (
    <div className="flex justify-between items-center w-full px-9 pt-11">
      <div className="text-white text-4xl">
        <Image src={"logo.svg"} alt="logo" width={157} height={33} />
      </div>
      <div className="flex">
        {account ? (
          <>
            <Button text={`${balance} wBTC`} shade="dark" />
            <Button text={account} shade="light" />
          </>
        ) : (
          <Button text={'Connect Wallet'} shade="light" onClick={loadWeb3Modal} />
        )}
      </div>
    </div>
  );
}
