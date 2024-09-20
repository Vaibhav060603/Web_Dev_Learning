import React from 'react'
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <>
        <footer id='idhfoot0'>
            <p id='idhfoot1'>Send me a message!</p>
            <p id='idhfoot2'>Have any questions? Or just want to say hello? Please do 😄.</p>
            <p id='idhfoot3'></p>

            <p id='idhfoot4'></p>

            <div id='idhfoot5'>
                <p>Name</p>
                <input type="text" className='cfoot1' />
                <p>E-mail</p>
                <input type="email" className='cfoot1' />
                <p>Message</p>
                <textarea name="" id="idhfoot6" className='cfoot1' rows="5" cols="20" ></textarea>
            </div>

            <input type="submit" value="Send" id='idhfoot7'/>

            <p id='idhfoot8'>
                <a href="https://github.com/Vaibhav060603"><FaGithub color='white' size="2.6rem" className='chfoot1'/></a>
                <a href="mailto:vaibhavkankanwadi841@gmail.com"><IoMailOutline color='white' size="2.6rem" className='chfoot1'/></a>
                <a href="https://www.linkedin.com/in/vaibhavskankanwadi"><IoLogoLinkedin color='white' size="2.6rem" className='chfoot1'/></a>
            </p>
            
            
        </footer>

    </>
  )
}
