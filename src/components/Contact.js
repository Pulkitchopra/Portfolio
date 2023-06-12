import React from 'react'
import Resume from '../Pulkit Chopra Resume.pdf'

const Contact = (props) => {
  return (
    <section className='pb-8' id='contact'  style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}} >
    <h1 className='text-3xl text-center font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>Contact Page</h1>

    <div className='flex mt-8 bg-gray-200 m-16 p-6 rounded-3xl sm:grid sm:grid-cols-1 sm:gap-y-6 sm:m-8'>
    <div className='ml-36 text-lg contact-left md:ml-1 lg:ml-36 sm:ml-3'>
        <h1 className='text-3xl font-bold m-6 sm:text-xl md:text-xl lg:text-3xl '>Contact Us Page</h1>
        <p className='text-xl m-6 my-6 sm:text-sm md:text-md md:m-1 lg:text-xl lg:m-6'><i className="fa-solid fa-phone mx-3"></i>Phone Number</p>
        <p className='text-xl m-6 my-6 sm:text-sm md:text-md md:m-1 lg:text-xl lg:m-6'><i className="fa-solid fa-envelope mx-3"></i>Email</p>
    <div className='text-2xl m-3 my-8 sm:text-lg'>
    <a href='https://www.linkedin.com/in/pulkit-chopra-04775a169/'><i className="fa-brands fa-linkedin mx-6 cursor-pointer hover:text-gray-600"></i></a>
    <a href='https://github.com/Pulkitchopra'><i className="fa-brands fa-github cursor-pointer hover:text-gray-600"></i></a>
    </div>
    <a href= {Resume} download className=' bg-blue-600 p-3 rounded-xl m-6 text-xl font-semibold text-white sm:text-sm'>Download CV</a>
    </div>

    <div className='flex contact-right'>
    <form>
        <div className='md:w-80 sm:w-60'>
            <input type='text' placeholder='Enter your Name' />
        </div>
        <div className='sm:w-60'>
            <input type='text' placeholder='Enter your Email'/>
        </div>

        <div className='sm:w-60'>
            <textarea name=' ' id=' ' cols={30} rows={5} placeholder='Write Subject'></textarea>
        </div>
        <button className=' bg-blue-600 p-3 rounded-xl m-6 text-lg text-white font-semibold'>Submit</button>
        

    </form>
    </div>
    </div>
    </section>
  )
}

export default Contact
