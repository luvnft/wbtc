import { useContext, useState } from "react";
import { Button } from "./Button";
import { EtherContext } from './EtherProvider'; // replace with the correct import path
import { Input } from "./Input";
import { TransactionContext } from './TransactionContext';// replace with the correct import path

export function Mainarea() {
    const { account, loadWeb3Modal } = useContext(EtherContext);
    const { setTransaction } = useContext(TransactionContext); // getting setTransaction from TransactionContext
    const [sendValue, setSendValue] = useState("");
    const [receiveValue, setReceiveValue] = useState("");
    const [receiveAddress, setReceiveAddress] = useState("");
    const [fees, setFees] = useState("");

  const initiateTransaction = () => {
    const newTransaction = {
        buttonYes: true,
        value: sendValue,
        status: "Successful", // you may want to manage status based on your business logic
        receiveValue,
        receiveAddress,
        fees
    };
    setTransaction(prevState => [...prevState, newTransaction]);

    // Reset form
    setSendValue("");
    setReceiveValue("");
    setReceiveAddress("");
    setFees("");
}
    return (
        <div className="flex flex-col items-center justify-between ">
            <Input onChange={e => setSendValue(e.target.value)} value="Send" shade="light" image="btc.svg"/>
            <Input onChange={e => setReceiveValue(e.target.value)} value="Receive" shade="light" image="wBTC.svg" />
            <Input onChange={e => setReceiveAddress(e.target.value)} value="Receive Address" shade="dark" image="" />
            <Input onChange={e => setFees(e.target.value)} value="Fees" shade="dark" image="" />
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
