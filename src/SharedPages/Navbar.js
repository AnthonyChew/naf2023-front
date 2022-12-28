import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NAFLogo from './svgs/NAF_Logo.svg';
import HumanIcon from './svgs/HumanIcon.svg';
import CartIcon from './svgs/CartIcon.svg';

const Navbar = () => {
    // if really need handle onclick outside 
    // https://github.com/Pomax/react-onclickoutside

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProgrammesOpen, setIsProgrammesOpen] = useState(false); 

    return (
        <div >
            <div class="flex items-center lg:px-10 md:px-0 border-b-8 border-black">
                <img src={NAFLogo} class="w-[200px] h-[120px] flex-initial"></img>

                <div class="relative hidden navbar lg:flex justify-evenly flex-1 font-syne font-bold text-xl">
                    <Link to="/" class="link" smooth>HOME</Link>
                    <Link to="/about" class="link" smooth>ABOUT</Link>
                    <div class="relative">
                        <Link id="dropdownNavbarButton"  onClick={() => setIsProgrammesOpen((prev) => !prev)}>PROGRAMMES</Link>
                        <div onClick={() => setIsProgrammesOpen(false)}  id="dropdownNavbar" className={isProgrammesOpen ? "absolute z-100 font-medium left-[10%] top-[200%] min-w-[175px] z-10 bg-white py-2 text-center rounded shadow-inner shadow-2xl" : "hidden"}>
                            <Link to="/glimmer" class="link block py-2 px-3 hover:bg-gray-200" smooth>Glimmer</Link>
                            <Link to="/nebula" class="link block py-2 hover:bg-gray-200" smooth>Nebula</Link>
                            <Link to="/starburst" class="link block py-2 hover:bg-gray-200" smooth>Starburst</Link>
                            <Link to="/interstellar" class="link block py-2 hover:bg-gray-200" smooth>Interstellar</Link>
                            <Link to="/orbit" class="link block py-2 hover:bg-gray-200" smooth>Orbit</Link>
                            <Link to="/workshop" class="link block py-2 hover:bg-gray-200" smooth>Workshop</Link>
                            <Link to="/picrew" class="link block py-2 hover:bg-gray-200" smooth>Piccrew</Link>


                        </div>
                    </div>
                    <Link to="/marketplace" class="link" smooth>MARKETPLACE</Link>
                    <Link to="/" class="link" smooth>NAFXCAC</Link>
                    <Link to="/" class="link" smooth>FAQ</Link>
                </div>
                <div class="flex w-[100%] items-center justify-end lg:contents lg:w-[auto]">
                    <Link to="/cart" class="link" smooth><img src={CartIcon} class="w-[35px] h-[35px] mr-8"></img></Link>
                    <Link to="/profile" class="link" smooth><img src={HumanIcon} class="w-[35px] h-[35px] mr-8"></img></Link>
                    {/* hamburger menu */}
                    <div class="lg:hidden text-right">
                        <button class="navbar-burger text-blue-600 p-3" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <svg class="block h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* navbar mobile menu */}
            <div className={isNavOpen ? "navbar-menu relative z-50" : "navbar-menu relative z-50 hidden"}>
                <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div class="flex items-center justify-end mb-8">
                        <button class="navbar-close" onClick={() => setIsNavOpen(false)}>
                            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <Link onClick={() => setIsNavOpen(false)} to="/" class="link block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth >HOME</Link>
                        <Link onClick={() => setIsNavOpen(false)} to="/about" class="link block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth>ABOUT</Link>
                        <div class="relative p-4 text-sm">
                            <Link id="dropdownNavbarButton" class="link block font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" onClick={() => setIsProgrammesOpen((prev) => !prev)}>PROGRAMMES</Link>
                            <div onClick={() => setIsNavOpen(false)} id="dropdownNavbar" className={isProgrammesOpen ? " font-medium z-10 py-2 px-3 text-left text-gray-400" : "hidden"}>
                            <Link to="/nebula" class="link block py-2 px-3 hover:bg-gray-200" smooth>Nebula</Link>
                            <Link to="/starburst" class="link block py-2 px-3 hover:bg-gray-200" smooth>Starburst</Link>
                            <Link to="/interstellar" class="link block py-2 px-3 hover:bg-gray-200" smooth>Interstellar</Link>
                            <Link to="/orbit" class="link block py-2 px-3 hover:bg-gray-200" smooth>Orbit</Link>
                            <Link to="/workshop" class="link block py-2 px-3 hover:bg-gray-200" smooth>Workshop</Link>
                            <Link to="/picrew" class="link block py-2 px-3 hover:bg-gray-200" smooth>Piccrew</Link>

                            </div>
                        </div>
                        <Link onClick={() => setIsNavOpen(false)} to="/marketplace" class="link block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth>MARKETPLACE</Link>
                        <Link onClick={() => setIsNavOpen(false)} to="/" class="link block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth>NAFXCAC</Link>
                        <Link onClick={() => setIsNavOpen(false)} to="/" class="link block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" smooth>FAQ</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
