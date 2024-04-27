'use client'

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="text-white bg-transparent px-8 md:px-24 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-[25px]">SobChain</div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden  md:flex text-base space-x-5">
        <li>
          <a href="#" className="hover:text-gray-300">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            MEMES
          </a>
        </li>
      </ul>

      <button onClick={() =>scrollToSection('buytoken')} className="hidden md:block w-[221px] h-[55px] text-base bg-white hover:text-white hover:bg-[#CD007A] text-[#CD007A] px-4 py-2 rounded-3xl">
        Buy Sobchain
      </button>
      {/* Mobile Menu */}
      <div className="text-2xl relative md:hidden ml-auto">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX size={36} /> : <HiMenuAlt4 size={36} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="fixed z-20 top-0 right-0 left-0 text-3xl h-1/2 bg-white/60 backdrop-blur-md text-black rounded-bl-[100px] py-4 px-8"
            >
              <button
                className="absolute top-4 right-4 text-[20px] px-4 text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <HiX size={36} />
              </button>
              <ul className="flex flex-col space-y-5  font-goldman font-bold pt-[73.9px] items-end">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    MEMES
                  </a>
                </li>
              
              </ul>
             <button onClick={() =>scrollToSection('buytoken')} className="mt-16 w-full h-[55px] text-base bg-white hover:text-white hover:bg-[#CD007A] text-[#CD007A] px-4 py-2 rounded-3xl">
                Buy Sobchain
              </button> 
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </nav>
  );
};

export default Nav;
