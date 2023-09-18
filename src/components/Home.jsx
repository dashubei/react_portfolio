import React from 'react'
import icon from "../../public/image/top.png";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade';


function Home() {
  return (
    <Fade id="home" className="text-white ">
    <div className="container h-[80vh] md:h-[85vh] flex md:flex-row items-center md:py-20">
        <motion.div className="md:w-1/2 flex-grow lg:pr-24 lg:pl-[150px] text-center md:text-left"
          variants={{
            hidden: {opacity:0, y:75,},
            visible: {opacity:1,y:0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.5, delay: 0.25}}
        >
          <h1 className="sm:text-6xl text-[50px] mb-4 font-medium">
            Taiki Kita's
            <br />
            <h2 className="text-[30px] pt-[20px]">Portfolio</h2>
          </h1>
          <div>
            <button className="text-white rounded-2xl border-2 border-dashed border-black bg-[#FCBB00] px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              <ScrollLink to="contact" smooth={true} duration={1000}>Contact</ScrollLink>
            </button>
          </div>
        </motion.div>
        <motion.div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sr-only md:not-sr-only" whileHover={{ scale: 1.5, rotate: 45 }} whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}>
          <img
            className="object-cover object-center rounded"
            alt="トップ画像"
            src={icon}
          />
        </motion.div>
      </div>
    </Fade>
  )
}

export default Home
