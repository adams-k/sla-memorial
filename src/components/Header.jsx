import { useState } from "react";
import { navData } from "../assets/Data";

const Header = () => {
    const [click, setClick] = useState(false)
    const link = navData.map(([id, title, url]) => (
        <li className="navlink" key={id}><a href={url}>{title}</a></li>
    ))

    return (
        <div className="bg-banner bg-cover bg-center lg:h-[490px] text-white">
            <nav className="flex justify-between text-white bg-black/80 w-full px-10 h-16">
                <h2 className="text-[18px] py-5">FUND</h2>
                <ul className="lg:flex gap-6 text-[18px] py-5 hidden">
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
                        <ul className={`flex flex-col gap-6 text-[18px] bg-black/80 transition-all h-[100vh] ${click ? 'w-[80%] translate-x-0' : 'translate-x-full' } duration-700 top-0 bottom-0 right-0 z-20 fixed p-20`}>
                            {link}
                        </ul>
                    </div>
                </div>

            </nav>
            
        </div>
    );
};

export default Header;