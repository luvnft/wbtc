import React from "react";
import Image from "next/image";

interface InputProps {
  value: string;
  shade: string;
}

export function Input({ value, shade }: InputProps) {
  const backgroundColor = shade === "light" ? "bg-white" : "bg-popat";
  const textColor = shade === "light" ? "text-black" : "text-white";

  return (
    <div className={`rounded-2xl p-4 m-2 w-[400px] ${backgroundColor}`}>
      <div className={`text-dark-grey ${textColor}`}>{value}</div>
      <div className="flex justify-between">
        <input type="text" className={`font-bold w-[320px] text-4xl ${backgroundColor}  outline-none ${textColor}`} placeholder="0" />
        <Image src={"btc.svg"} alt="logo" width={32} height={32} />
      </div>
    </div>
  );
}
