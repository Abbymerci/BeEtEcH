import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
   <section id="intro" className="intro">
    <div className='introContent'>
        <span className="hello">Hello, </span>
        <span className='introText'>I'm <span className ="introName">Abby Arowolaju</span> <br/> A Seasoned Software Engineer </span>
        <p className="introPara"> Dedicated to empowering people excel in their education and careers path. With my years of experience in Tech, I offer personalized mentorship, interview prep, and career advice to empower individuals like you. Let's work together to achieve your goals!</p>
        {/* <Link> <button className='btn'><img src={btnImg} alt='' className='btnImg' /> Hire Me </button></Link> */}
    </div>

    <img src={bg} alt='profile' className='bg' />

 </section>
  )
}

export default Intro;