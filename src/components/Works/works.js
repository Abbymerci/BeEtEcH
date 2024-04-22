import React from 'react'
import './works.css'
// import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
// import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
// import Portfolio5 from '../../assets/portfolio-5.png'
// import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle"> My Portfolio </h2>
        <span className="worksDesc"> As an entry-level developer at Wells Fargo, I've had the privilege of collaborating with diverse individuals, particularly students, throughout my journey. Previously, I served as a mentor and tutor for Edlyft, where I shared invaluable tips and insights with aspiring students. Having transitioned from Nursing to Computer Science midway through college, I intimately understand the challenges of such a leap and am passionate about supporting others facing similar transitions.
            Additionally, I've provided one-on-one mentoring and interview preparation sessions, offering personalized guidance and strategies to help individuals succeed in their career pursuits. Each interaction has reinforced my commitment to empowering others in their professional development journey. </span>
        <div class="worksImgs">
            {/* <img src={Portfolio1} alt="" className="worksImg" /> */}
            <img src={Portfolio2} alt="" className="worksImg" />        
            {/* <img src={Portfolio3} alt="" className="worksImg" /> */}
            <img src={Portfolio4} alt="" className="worksImg" />
            {/* <img src={Portfolio5} alt="" className="worksImg" /> */}
            {/* <img src={Portfolio6} alt="" className="worksImg" /> */}
        </div>
        {/* <button className="worksBtn"> See More </button> */}
     </section>
  )
}

export default Works