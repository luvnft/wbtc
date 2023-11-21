import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface TransactionDetailsProps {
    buttonYes: boolean;
    value: string;
    status: string;
    timeRemaining?: string;
}

export function TransactionDetails({ buttonYes, value, status, timeRemaining }: TransactionDetailsProps) {
    const [remainingTime, setRemainingTime] = useState(timeRemaining || "0");
    const [transactionStatus, setTransactionStatus] = useState(status);
    const [isButtonEnabled, setIsButtonEnabled] = useState(buttonYes);
    const [claimClicked, setClaimClicked] = useState(false);  // This is new

    // Countdown logic
    useEffect(() => {
        if (Number(remainingTime) > 0) {
            const timerId = setInterval(() => {
                setRemainingTime(prevTime => (Number(prevTime) - 1).toString());
            }, 1000); // Update every second

            return () => {
                clearInterval(timerId);
            };
        }
    }, [remainingTime]);

    // Status and button enabling logic
    useEffect(() => {
        if (Number(remainingTime) <= 0 && transactionStatus !== "Success") {
            setTransactionStatus("Success");
            setIsButtonEnabled(true); // Enable claim button
        }
    }, [remainingTime, transactionStatus]);

    return (
        <div className="flex flex-col justify-between w-[640px] py-2">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex mr-4">
                        <Image src={"btc.svg"} alt="logo" width={32} height={32} />
                        <Image src={"rightarrow.svg"} alt="logo" width={16} height={16} className="mx-2" />
                        <Image src={"wBTC.svg"} alt="logo" width={32} height={32} />
                    </div>
                    <div className="text-black">
                        <div>{value}</div>
                        <div className="text-dark-green">
                            {
                                Number(remainingTime) > 0 ? remainingTime : transactionStatus
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {isButtonEnabled && !claimClicked ? (
                        <button className="text-dark-green text-base rounded-full py-4 px-6 bg-neon font-semibold cursor-pointer mx-2 w-[230px]"
                            onClick={() => setClaimClicked(true)}
                        >Claim Wrapped BTC</button>
                    ) : claimClicked ? (
                        <>
                            <div className="text-right text-black">Received at 0x4567...5678</div>
                            <div className="text-right text-black">View transaction</div>
                        </>
                    ) : (
                        <div>
                            <div className="text-right text-black">Send to 1F1tAa...Nn4xqX</div>
                            <div className="text-right text-black">Awaiting Deposit</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
