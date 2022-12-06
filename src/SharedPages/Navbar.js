import React from 'react'
import { Link } from "react-router-dom";
import NAFLogo from './svgs/NAF_Logo.svg';
import HumanIcon from './svgs/HumanIcon.svg';

const Navbar = () => {
    return (
        <div>
        
            <div class="flex items-center lg:px-10 md:px-0 border-b-8 border-black">
                <img src={NAFLogo} class="w-[200px] h-[120px] flex-initial"></img>
                <div class="navbar flex justify-evenly flex-1 font-syne font-bold text-xl">
                        <Link to="/" class="link" smooth>HOME</Link>
                        <Link to="/about" class="link" smooth>ABOUT</Link>
                        <Link to="/programmes" class="link" smooth>PROGRAMMES</Link>
                        <Link to="/marketplace" class="link" smooth>MARKETPLACE</Link>
                        <Link to="/" class="link" smooth>NAFXCAC</Link>
                        <Link to="/" class="link" smooth>FAQ</Link>
                </div>
                <img src={HumanIcon} class="w-[70px] h-[50px] flex-initial"></img>
            </div>
        </div>
    )
}

export default Navbar
