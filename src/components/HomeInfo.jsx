import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
 
const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center text-Home-Text'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
     <h3 className='font-medium text-Home-Text'>{btnText}</h3>
     <img  src={arrow} />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-beige py-4 px-8 text-Home-Text mx-5'>
        Hi, my name is <span className='font-semibold'>Mario</span> <span style={{ textShadow: 'none' }}>✋</span>
        <br />
        I'm an undergraduate <span className='font-semibold'>CS</span> student from Ecuador studying in Germany
        <br />
        <br />
        <p className='neo-brutalism-brown info-btn'>
        <span className='text-white text-opacity-90 text-xl'>Drag the screen to explore</span> 
        </p>
      </h1>
    </>
  ),

  2: (
    <InfoBox 
      text="Worked in different industries and picked up many skills along the way"
      link="/about"
      btnText="Learn More about me"
    />
  ),

  3: (
    <InfoBox 
      text="Created multiple projects during my first year studying. Interested?"
      link="/projects"
      btnText="View Projects"
    />
  ),

  4: (
    <InfoBox 
      text="Let's work together! Get in contact with me with a few clicks"
      link="/contact"
      btnText="Get in Touch"
    />
  )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo