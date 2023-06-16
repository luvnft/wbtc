'use client'
import React, { useState } from "react";
import Image from 'next/image'
import { ethers } from 'ethers';


interface ButtonProps {
    text: string;
    shade: string;
    onClick?: () => void;
}

export function Button({ text, shade, onClick }: ButtonProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleButtonClick = async () => {
      if (shade === "light" && !ethers.isAddress(text)) { // if text is not an Ethereum address
        setIsPopupOpen(true);
      }
    };
  
    const handleConnectToMetamask = async () => {
        if (onClick) {
          await onClick(); // wait for MetaMask to connect
        }
        setIsPopupOpen(false); // close the popup after connecting
      };
    
  
    const handleCloseClick = () => {
      setIsPopupOpen(false);
    };
  
    // shorten the address if it's an Ethereum address
    const buttonText = ethers.isAddress(text) 
      ? `${text.slice(0,6)}...${text.slice(-4)}`
      : text;
  
      const buttonClass = shade === "dark"
      ? "text-white text-base rounded-full py-4 px-6 bg-popat font-semibold cursor-pointer mx-2"
      : "text-dark-green text-base rounded-full py-4 px-6 bg-neon font-semibold cursor-pointer mx-2";
  
    return (
        <div>
            <button
                className={buttonClass}
                onClick={handleButtonClick}
            >
                {buttonText}
            </button>

            {isPopupOpen && shade === "light" && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-[#B6EEACA0] bg-opacity-50 flex items-center justify-center">
                    <div className="bg-dark-green p-4 rounded-2xl w-[416px] h-[199px]">
                        <div className="justify-between flex text-[#E5FFBE] text-base px-6 py-4 font-bold">
                            <h2>Connect Wallet</h2>
                            <button onClick={handleCloseClick}>X</button>
                        </div>
                        <div className="flex bg-[#006B28] p-4 rounded-2xl mb-2 cursor-pointer">
                            <Image src={"catalogG.svg"} alt="Centered Image" width={32} height={32} className=" pr-4" />
                            <text className="text-white text-base pr-3">Catalog Wallet</text>
                            <Image src={"new.svg"} alt="Centered Image" width={32} height={32} className=" pr-4" />
                        </div>
                        <div className="flex bg-[#006B28] p-4 rounded-2xl cursor-pointer" onClick={handleConnectToMetamask}>
                            <Image src={"metamsk.svg"} alt="Centered Image" width={32} height={32} className=" pr-4" />
                            <text className="text-white text-base ">MetaMask</text>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


