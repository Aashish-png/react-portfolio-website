import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aashish-sarva-3101a51b7/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/Aashish-png" target="__blank"><BsGithub/></a>
        {/* <a href="https://dirbble.com" target="__blank"><BsDribbble/></a> */}
    </div>
  )
}

export default HeaderSocial