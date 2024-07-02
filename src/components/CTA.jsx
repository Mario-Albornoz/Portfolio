import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            Interested working together?   
        </p>
        <Link to="/contact" className='btn'>
        Get in touch
        </Link>
    </section>
  )
}

export default CTA