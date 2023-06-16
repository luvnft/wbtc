import { useContext, useState } from "react";
import { Button } from "./Button";
import { EtherContext } from './EtherProvider'; // replace with the correct import path
import { Input } from "./Input";
import { TransactionContext } from './TransactionContext';// replace with the correct import path

export function Mainarea() {
    const [value, setValue] = useState("");
    const { account, loadWeb3Modal } = useContext(EtherContext);
    const { transaction, setTransaction } = useContext(TransactionContext); // getting setTransaction from TransactionContex
    const initiateTransaction = () => {
        setTransaction([...transaction, {
            buttonYes: false,
            value: value,
            status: "Sucessfull",
            timeRemaining: "10",
        }])
    }

    return (
        <div className="flex flex-col items-center justify-between ">
            <Input value="Send" shade="light" image="btc.svg" onChange={setValue} />
            <Input value="Receive" shade="light" image="wBTC.svg" sendData={(Number(value)*0.99999).toString()} />
            <Input value="Receive Address" shade="dark" image=""  sendData={account ?? ''}/>
            <Input value="Fees" shade="dark" image=""  sendData={(Number(value)*0.001).toString()} />
            {
                account ? <button
                    className="text-dark-green text-base rounded-full py-4 px-6 bg-neon font-semibold cursor-pointer mx-2 w-[230px]"
                    onClick={initiateTransaction} // initiate transaction on click
                >
                    Initiate
                </button>
                    : <Button text="Connect Wallet" shade="light" onClick={loadWeb3Modal} />
            }
        </div>
    );
}
