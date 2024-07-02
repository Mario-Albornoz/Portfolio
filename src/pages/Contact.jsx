import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  /**Loading stae */
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert} = useAlert();

  /**update properties for all of the form boxes */
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Mario',
        from_email: form.email,
        to_mail: 'mario.albornoz411@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully', type: 'success'})
      /**hide alert */

      setTimeout(() => {
        hideAlert();
        setForm({ name: '', email: '', message: ''});
      }, [3000])

      
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({ show: true, text: 'Something went wrong, I did not receive you message', type: 'danger'})
    })
  };
  
  /**constants to track clicks and not clicking within each box */
  const handleClick = () => {};
  const handleBlur = () => {};
  

  return (
    <section className='relative flex lg:flex-row flex-col
    max-container'>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name="name"
              className='input'
              placeholder='John Doe'
              required
              value={form.name}
              onChange={onChange}
              onClick={handleClick}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name="email"
              className='input'
              placeholder='JohnDoe@email.com'
              required
              value={form.email}
              onChange={onChange}
              onClick={handleClick}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              type='text'
              name="message"
              className='input'
              placeholder='Leave a Message'
              required
              value={form.message}
              onChange={onChange}
              onClick={handleClick}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onClick={handleClick}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...': 'Submit'}
          </button>
        </form>
      </div>

      {/** place 3d model here in a canvas inside a div */}
    </section>
  )
}

export default Contact