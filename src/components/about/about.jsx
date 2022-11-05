import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me "/>
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article  className='about__card'>
                <BsAward className='about__icon'/>
                <h5>Experience</h5>
                <small>6+ months working </small>
              </article>
              {/* <article  className='about__card'>
                <FaUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>2+ </small>
              </article> */}
              <article  className='about__card'>
                <AiFillProject className='about__icon'/>
                <h5>Projects</h5>
                <small>3+ completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore accusantium tempore eligendi soluta qui minima sapiente ratione repellat cumque sit, quaerat ducimus commodi blanditiis explicabo rerum nesciunt voluptatem fugiat.</p>
            <a href="#contact"  className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about