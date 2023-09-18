import React from 'react'

import { Link as ScrollLink } from 'react-scroll'

function Header() {
  return (
    <div>
      <header className="text-white">

        <div className="container mx-auto flex p-5 items-center md:flex-row flex-col">
          <a href="/" className="font-medium mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer">TaikiKita</span>
          </a>
          <nav className="flex items-center justify-center md:ml-auto text-base">
            <ScrollLink to="about" smooth={true} duration={500} className="mr-5 hover:text-yellow-400 duration-300 cursor-pointer hover:underline">
              About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="mr-5 hover:text-yellow-400 duration-300 cursor-pointer hover:underline">
              Skills
            </ScrollLink>
            <ScrollLink to="works" smooth={true} duration={500} className="mr-5 hover:text-yellow-400 duration-300 cursor-pointer hover:underline">
              Works
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}  className="hover:text-yellow-400 duration-300 cursor-pointer hover:underline">
              Contact
            </ScrollLink>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
