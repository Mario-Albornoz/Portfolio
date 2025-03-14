import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='red-gradient_text font-semibold
        drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Here you can find a showcase of some of the projects I'm currently working on, as well as completed projects.
          I've dabbled in various project areas such as web development, arcade games. Currently working on a AI powered Learning management system.
          and a Financial Analytics and Business Intelligence System for Medium-Sized Companies, integrating forecasting through linear regression for better decision-making.
          </p> 
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className="lg:w-[400px] w-full" key={project.name} >
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
                src={project.iconUrl}
                alt="Project Icon"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> 

          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              {project.name}
            </h4>

            <p className='mt-2 text-slate-500'>
              {project.description}
            </p>

            <div className='mt-5 flex items-center gap-2 font-poppins'> 
              <Link 
                to={project.link}
                target='_blank'
                rel="noopener noreferrer"
                className='font-semibold text-blue-600'
              >
                Link to Repository
              </Link>
            </div>

            {/* render a video if available*/}
            {project.demo && (
              <div className='mt-5 items-center rounded-lg bg-slate-200 p-3'>
                <h1 className='py-2 underline font-medium'>
                Video Demostration:
                </h1>
                <video className="w-full rounded-lg" controls>
                  <source src={project.demo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div> 
        </div>
      ))}
    </div>


      <hr className='border-slate-200'/>
      
      <CTA />
    </section>
  )
}

export default Projects