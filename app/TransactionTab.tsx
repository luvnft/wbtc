import React from "react";
import { TransactionDetails } from "./TransactionDetails";
import { TransactionContext } from './TransactionContext';

export function TransactionTab() {
    const {transaction} = React.useContext(TransactionContext);
    console.log(transaction);
    return (
        <div className="flex flex-col items-center justify-between pb-[120px]">  
            <text className="text-[#00501E] text-left font-bold w-[640px]">Transactions</text>
            <div className="py-5 px-4 rounded-2xl bg-white ">
                {transaction.map((item) => <TransactionDetails buttonYes={item.buttonYes} value={item.value} status={item.status} timeRemaining={item.timeRemaining}/>)}
            </div>
        </div>
    );
}