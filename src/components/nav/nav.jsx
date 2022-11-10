import React, { useReducer } from 'react'
import './nav.css'
import {BiHomeHeart}from'react-icons/bi'
import {BiUserCheck}from'react-icons/bi'
import {AiOutlineBook}from'react-icons/ai'
import {MdOutlineHomeRepairService}from'react-icons/md'
import {MdContactPhone}from'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
 return(
  <nav>
  <a href="#" onClick={()=>setActiveNav('#')} className={activeNav =='#'?'active':''}><BiHomeHeart/></a>
  <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav =='#about'?'active':''}><BiUserCheck/></a>
  <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav =='#experience'?'active':''}><AiOutlineBook/></a>
  <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav =='#portfolio'?'active':''}><MdOutlineHomeRepairService/></a>
  <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav =='#contact'?'active':''}><MdContactPhone/></a>
  </nav>
 )
}

export default Nav