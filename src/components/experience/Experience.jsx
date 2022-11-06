import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
{/* skills that you have in frontend development */}
              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Material UI</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>
              
            </div>
        </div>
        {/* end of frontend sections */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
{/* skills that you have in Backend development */}
              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

            </div>
        </div>
      </div>
    </section >
  )
}

export default Experience