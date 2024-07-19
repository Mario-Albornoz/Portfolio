import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { NavLink, Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills } from '../constants'
import CTA from '../components/CTA';
import { github, pdf } from '../assets/icons';


const About = () => {
  return (
    <section className='max-container'>

        <h1 className='head-text'>
          Hello, I'm <span className='red-gradient_text font-semibold
          drop-shadow'>Mario</span> 
        </h1>

        <h2 className='subhead-text my-10'>
          About me:
        </h2>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am a computer science student based in Germany. I consider myself as a determined individual, who works best underpressure. I love working in an project oriented matter with clear goals and 
          milestones. Due to my past experience I bring insights from a variety of fields, like: product manufacturing, medicine, and communications.
          Furthermore, even though my journey coding has been relatively short, I'm passionate in coding and learning new skills. For me is always fun to become great at a new skill.
          I firmly believe that if you are going to do something you need to do it right. Whenever I face a challenge or learn something new I make sure I understand it fundamentally.
          I look for why something works the way it does, and I don't stop until I grasp it at its most basic core. That way everything I learn becomes imprited in my mind and I never forget it.
          That has paid off accross my profesional jobs and specially in my student career. I love new opurtunities and face challenges head on, no matter how intimidating or demanding they might be.
          </p> 
      </div>

      <h1 className='subhead-text my-10'>
        Why computer science? 
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I decdided to study computer science, because I've always loved to play videogames, and was amazed at how a bunch of 1 and 0 could create a whole game. However for most of my life I was
          intimidated to actually learn how to program and code. The learning curve always managed to scare me off. Nevertheless in 2023 I decided to finally take a course on EdX, and I took the Harvard Cs50 course.
          Since then I've loved every aspect of coding and even though I'm still learning every day, the path doesn't seem as scary anymore. I realized that when it comes to programing the important thing is to keep going 
          and not be discouraged by what you don't know, instead look at it as an importunity to reach even greater heights. 
        </p> 
      </div>
{/**SKilss section */}

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

{/**experience section */}
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Talk about work experience...fill later</p> 
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={experience.icon}
                alt={experience.company_name}
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
              }} 
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className= 'w-full flex content-center md:flex-row flex-col sm:mt-16 my-20 gap-12 justify-center items-center'>
        <a href="" target="_blank" rel="nonopener noreferrer"> 
          <h3 className='flex flex-col items-center'>
            <img
              src={pdf}
              alt=''
              className='w-12 h-12 object-contain'
            />
            <span>View Resume/CV</span>
          </h3>
        </a>

        <a href="https://github.com/Mario-Albornoz/Portfolio/blob/main/src/assets/files/Mario_Albornoz_CV.pdf" target="_blank" rel="noopener noreferrer">
          <h3 className='flex flex-col items-center'>
            <img
              src={github}
              alt=''
              className='w-15 h-15 object-contain'
            />
            <span>GitHub</span>
          </h3>
        </a>

      </div>


      <hr className='border-slate-200'/>  

      <CTA />
    </section>
  )
}

export default About