import React from 'react'
import logo from '../images/Frame 1.png'

const Home = (props) => {

  return (


    <section className='flex min-h-screen' id='home' style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
      <div className='flex m-3 md:grid lg:flex sm:grid  '>
        <div className='flex justify-center my-36 ml-48 mx-6 p-3 sm:my-3 sm:mt-16 sm:ml-6 md:my-8 md:ml-24 lg:ml-48 lg:my-36 '>

          <div className='p-3 md:p-1 md:text-center '>
            <span className='font-serif text-6xl font-bold text-blue-600 heading'>Hello!</span>
            <h1 className='font-serif text-3xl text-gray-600 heading'> My Name is </h1>
            <span className='font-serif text-6xl font-bold  text-blue-600 heading'> Pulkit Chopra </span>
            <h2 className='font-serif text-3xl text-gray-600 heading'>And I am a </h2>
            <span className='font-serif text-3xl font-bold heading' style={{color: props.webMode === 'light'? 'black': 'white'}}>Software Developer</span>
            <div className='flex my-3 md:justify-center'>
              <a href='#contact' className='flex bg-blue-600 py-3 px-5 rounded-3xl text-white hover:bg-blue-500 font-semibold my-3' >Contact Me</a>
            </div>
            <div className=' flex my-3 text-3xl md:justify-center' style={{color: props.webMode === 'light'? 'black': 'white'}} >
              <a href='https://www.linkedin.com/in/pulkit-chopra-04775a169/' className='hover:text-gray-800 mx-6'><i className="fa-brands fa-linkedin "></i></a>
              <a href='https://github.com/Pulkitchopra' className='hover:text-gray-800 ' ><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

        </div>

        <div className='flex justify-center my-16 sm:my-6 md:my-1 md:ml-16 lg:my-16'>
          <img src={logo} className='h-[600px] sm:h-96 ' alt=''  />
        </div>
      </div>
    </section>

  )
}

export default Home
