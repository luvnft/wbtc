import React from "react";
import Image from "next/image";
import { TransactionTab } from "./TransactionTab";
export function Footer() {
    return (
        <footer className="pt-9 bg-light-green w-full px-9">
            {/* <TransactionTab/> */}
            <div className="w-[600px] text-dark-green text-xs">
                wbtc.garden provides one of the easiest ways for you to acquire wBTC with real BTC. The Garden uses atomic swaps to facilitate trustless conversions. If you choose to use Catalog Wallet, the Garden is able to provide instant conversions. All of the code is open-source and can be viewed here.
            </div>
            <div className="justify-between w-full pt-4 pb-9 flex text-dark-green text-xs">
                <div className="flex">
                    Powered by 
                    <Image src={"bottomlog.svg"} alt="Centered Image" width={76} height={16} className=" pl-4" />
                </div>
                <div className="flex">
                    <div className="px-2">
                        Contact
                    </div>
                    <div className="px-2">
                        Twitter
                    </div>
                </div>
            </div>
        </footer>
    );
}
