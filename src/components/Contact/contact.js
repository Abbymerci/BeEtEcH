import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'
import YoutubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

var to_name = "Abby"
const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_nlca08c', 'template_syjfqxf', form.current, {
            publicKey: 't_XFyUo-eUT3BA3xy',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent successfully!')
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <section id="contactPage">
        <div id='clients'>
            <h1 className="contactPageTitle"> My Clients </h1>
            <p className='clientDesc'> I have had the opportunity I have had the opportunityI have had the opportunityI have had the opportunityI have had the opportunityI have had the opportunityI have had the opportunity </p>
            <div className='clientImgs'>
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
                
            </div>
        </div>

        <div id ='contact'>
            <h1 className='contactPageTitle'> Contact Me </h1>
            <span className='contactMeDesc'>Let's tackle tech challenges together! Questions, feedback, or just a friendly chat? Reach me via email or social media. Can't wait to connect! 🙂 </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail} name= {to_name}>
                <input type="text" className='name' placeholder='Your Name' name='from_name' required />
                <input type="text" className='email' placeholder='Enter Your Email' name='from_email' required />
                <textarea className='msg' name="message" rows='5' placeholder='Your Message' required ></textarea>
                <button type='submit' value='send' className='submitBtn'> Submit </button>
                <div className='links'>
                    <img src={TwitterIcon} alt="Twitter" className='link' onClick={() => window.location.href= "https://twitter.com/MercyArowolaju"}/>
                    <img src={YoutubeIcon} alt="Youtube" className='link'onClick={() => window.location.href= "https://www.youtube.com/channel/UC3-qnhBtnfnkwEu996ZIyTg"} />
                    <img src={InstagramIcon} alt="Instagram" className='link' onClick={() => window.location.href= "https://www.instagram.com/abby_arowolaju?igsh=MWJvaXR1ZDVybmVpZw%3D%3D&utm_source=qr"} />
                </div> 
            </form>
        </div>
    </section>
  )
}

export default Contact