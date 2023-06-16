// use client
import { Mainarea } from "./Mainarea";
import { Topbar } from "./Topbar";
import Image from 'next/image'
export function Header() {
    return (
        <header className="h-[720px] bg-dark-green w-full">
            <Topbar/>
            <Image src={"arrow.svg"} alt="Centered Image" width={48} height={48} className="z-2 relative left-[48.5vw] top-[138px]" />
            <Mainarea/>
        </header>
    );
}
