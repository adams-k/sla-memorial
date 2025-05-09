import { useState } from "react";
import { navData } from "../assets/Data";

const Header = () => {
    const [click, setClick] = useState(false)
    const link = navData.map(([key, title, url, label]) => (
        <li className="navlink" id={key}><a href={url} aria-label={label}>{title}</a></li>
    ))

    return (
        <div className="text-black">
            <nav className="flex justify-between text-black border-black/80 w-full px-12 h-[4em]">
                <img src="/logo_no_txt.png" alt="Scott Adams Sr Memorial logo, displaying a palm tree on an island with a sunset." 
                    className="w-[3em] h-[3em] my-2"/>
                <ul className="lg:flex gap-6 text-medium py-5 hidden">
                    {link}
                </ul>

                {/* ---------- mobile ---------- */}

                <div onClick={() => setClick(!click)} className="lg:hidden">
                    <div className="flex flex-col gap-2 absolute top-5 z-50"> 
                        <div className={`${click && 'absolute top-1 rotate-45'} menubar w-6`}></div>
                        <div className={`${click && 'hidden'} menubar w-4`}></div>
                        <div className={`${click && 'absolute top-1 -rotate-45'} menubar w-6`}></div>
                    </div>
                    <div className={`${click ? 'w-60% visible' : 'invisible'}`}>
                        <ul className={`flex flex-col gap-6 text-[18px] h-[100vh] shadow-2xl bg-gray-200 opacity-100 border-solid border-2 rounded-l-3xl border-gray-500 transition-all ${click ? 'w-[80%] translate-x-0' : 'translate-x-full' } duration-700 top-0 bottom-0 right-0 z-40 fixed p-20`}>
                            {link}
                        </ul>
                    </div>
                </div>

            </nav>
            
        </div>
    );
};

export default Header;