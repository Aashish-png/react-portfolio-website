import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiWhatsapp} from 'react-icons/si'
import  {  useRef as UseRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
   const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_3zinf5b', 'template_q8f6qxq', form.current, 'Fjhv2zZubXcomjBcP')
    .then((result) => {
      alert("email sent successfully thank you ")
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
        alert("Error while sending mail Please try to contact with different method ")
    });

    e.target.reset();
};


  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2> Contact Me </h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'> 
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aashishsarva47@gmail.com</h5>
            <a href="mailto:aashishsarva47@gmail.com">Send A Mail</a>
          </article>

          {/* <article className='contact__options'> 
          <HiOutlineMail/>
            <h4>Messenger</h4>
            <h5>Aashish__sarwa</h5>
            <a href="">Send A Mail</a>
          </article> */}

          <article className='contact__option'> 
          <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+9162*******</h5>
            <a href="https://wa.me/+916263867302?text=hi There"  target="_blank">Send A Message</a>
          </article>          
        </div>
        {/* End of contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your full name " required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section >
  )
}

export default contact