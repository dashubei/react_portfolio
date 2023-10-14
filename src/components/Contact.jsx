import React from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <Fade className="items-center text-center m-auto">
    <Element name="contact" className="text-white items-center text-center">
    <div className="container text-center my-5 items-center">
      <h1 className="sm:text-3xl text-2xl font-medium text-center">Contact<br/><i class="fa-solid fa-envelope fa-2x"></i></h1>
      <div>
        <p>お問い合わせは、<br class="md:hidden" />メールにてお願いいたします。</p>
      </div>
      <button className="text-white rounded-full bg-[#FCBB00] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 text-lg font-semibold">
      <a href="mailto:dashubei6@gmaill.com">dashubei6@gmail.com</a>
      </button>
    </div>
  </Element>
  </Fade>
  )
}

export default Contact
