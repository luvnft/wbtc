import React from "react";
import Image from "next/image";
import { Button } from "./Button";

interface TransactionDetailsProps {
    buttonYes: boolean;
}

export function TransactionDetails({ buttonYes }: TransactionDetailsProps) {
    return (
        <div className="flex flex-col justify-between w-[640px] py-2">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex mr-4">
                        <Image src={"btc.svg"} alt="logo" width={32} height={32} />
                        <Image src={"rightarrow.svg"} alt="logo" width={16} height={16} className="mx-2" />
                        <Image src={"btc.svg"} alt="logo" width={32} height={32} />
                    </div>
                    <div>
                        <div>1.29 BTC</div>
                        <div>Sucessfull!</div>
                    </div>
                </div>
                <div>
                    {buttonYes ? (
                        <Button text="Claim wBTC" shade="light" />
                    ) : (
                        <div>
                            <div className="text-right">Received at 0x4567...5678</div>
                            <div className="text-right">View transaction</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
