// use client
import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
export function Mainarea() {
    return (
        <div className="flex flex-col items-center justify-between ">
            <Input value='Send' shade="light"/>
            <Input value='Receive' shade="light"/>
            <Input value='Receive Address' shade="dark"/>
            <Input value='Fees' shade="dark"/>
           <Button text='Connect Wallet' shade="light"/>
        </div>
    );
}