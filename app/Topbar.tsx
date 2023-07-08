// Topbar.tsx

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { EtherContext } from './EtherProvider';

export function Topbar() {
  const { account, loadWeb3Modal, getWBTCBalance, logout } = useContext(EtherContext);
  // const [balance, setBalance] = useState(null);
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (account) {
      getWBTCBalance(account).then(setBalance);
    }
  }, [account, getWBTCBalance]);

  return (
    <div className="flex justify-between items-center w-full px-9 pt-9">
      <div className="text-white text-4xl">
        <Image src={"logo.svg"} alt="logo" width={157} height={33} />
      </div>
      <div className="flex">
        {account ? (
          <>
            <Button text={`${balance} wBTC`} shade="dark" />
            <Button text={account} shade="light" />
            <Image src={"logout.svg"} alt="logo" width={16} height={16} onClick={logout} className="cursor-pointer" />
          </>
        ) : (
          <Button text={'Connect Wallet'} shade="light" onClick={loadWeb3Modal} />
        )}
      </div>
    </div>
  );
}
