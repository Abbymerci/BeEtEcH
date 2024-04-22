import React from 'react'
import './skills.css'
import Resume from '../../assets/resume.jpg'
import InterviewPrep from '../../assets/interview.png'
import Mentor from '../../assets/mentor.png';
import Career from '../../assets/career.jpg';


 const Skills = () => {
  return (
    <section id="skills" className="skills"> 
    <span className='skillTitle'>What I do </span>
    <span className='skillDesc'>Welcome to the tech adventure zone! As a recent graduate from Morgan State University, I've journeyed through the twists and turns of the tech world—picture it as a thrilling rollercoaster of job applications, interview conundrums, and offer negotiations. Armed with my own experiences, I'm here to be your fearless leader through this exhilarating journey. Whether you're a newbie gearing up for your maiden voyage or a seasoned explorer seeking fresh challenges, let's team up and navigate the ever-evolving tech landscape together!</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={Resume} alt='Resume' className='skillBarImg' />  
            <div className='skillBarText'>
                <h2>Resume Review</h2>
                <p> Craft a standout resume with personalized feedback and suggestions tailored to your strengths and goals.</p>
            </div>
        </div> 
        <div className='skillBar'>
            <img src={InterviewPrep} alt='InterviewPrep' className='skillBarImg' />  
            <div className='skillBarText'>
                <h2>Interview Preparation</h2>
                <p>  Boost your interview confidence with tailored coaching and practice sessions covering technical questions and common scenarios. </p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={Mentor} alt='Mentor' className='skillBarImg' />  
            <div className='skillBarText'>
                <h2> Mentoring </h2>
                <p>  Get personalized guidance from an experienced mentor to navigate the tech world and achieve your career goals. </p>
            </div>
        </div>    

        <div className='skillBar'>
            <img src={Career} alt='Career' className='skillBarImg' />  
            <div className='skillBarText'>
                <h2> Career Tips </h2>
                <p>  Stay ahead in your tech career with actionable insights and advice on networking, industry trends, and professional development. </p>
            </div>
        </div>   
    </div>
    </section>
  )
}
export default Skills;