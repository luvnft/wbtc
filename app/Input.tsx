import React from "react";
import Image from "next/image";

interface InputProps {
  value: string;
  shade: string;
  image: string;
  onChange?: (value: string) => void;
  sendData? : string;
}

export function Input({ value, shade, image, onChange,sendData }: InputProps) {
  const backgroundColor = shade === "light" ? "bg-white" : "bg-popat";
  const textColor = shade === "light" ? "text-black" : "text-white";

  return (
    <div className={`rounded-2xl p-4 m-2 w-[400px] ${backgroundColor}`}>
      <div className={`text-dark-grey ${textColor}`}>{value}</div>
      <div className="flex justify-between">
        <input value={sendData} onChange={e=>(onChange && onChange(e.currentTarget.value))} type="text" className={`font-semi-bold w-[320px] text-2xl ${backgroundColor}  outline-none ${textColor}`} placeholder="0" />
        {
          image && <Image src={image} alt="logo" width={32} height={32} />
        }
      </div>
    </div>
  );
}
