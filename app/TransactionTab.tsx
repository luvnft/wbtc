import React from "react";
import { TransactionDetails } from "./TransactionDetails";
export function TransactionTab() {
    return (
        <div className="flex flex-col items-center justify-between pb-[120px]">  
            <text className="text-[#00501E] text-left font-bold w-[640px]">Transactions</text>
            <div className="py-5 px-4 rounded-2xl bg-white ">
                <TransactionDetails buttonYes={true}/>
                <TransactionDetails buttonYes={false}/>
            </div>
        </div>
    );
}