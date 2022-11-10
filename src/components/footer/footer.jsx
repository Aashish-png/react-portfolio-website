import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare }from 'react-icons/fa'
import {VscAzure} from 'react-icons/vsc'
const footer = () => {
  return (
    <footer>
      <a href="" className='footer__logos'><VscAzure/></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><BsInstagram/></a> */}
        {/* <a href="https://instagra.com"></a> */}
      </div>

      {/* <div className="footer__copyright">
        <small> &Copy  all right reserved </small>
      </div> */}
    </footer>
  )
}

export default footer