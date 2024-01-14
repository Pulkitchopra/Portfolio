import React, { useState } from 'react'
import picImage from '../images/Pulkit_Chopra.jpg'
import AboutTabs from './AboutTabs'
import Resume from '../Pulkit Chopra Resume.pdf'
import {Data} from './Data/AboutData'


const About = (props) => {
  
    const [toggle, setToggle] = useState(1);
    const updateToggle = (id) => {
        setToggle(id)
    }
    return (

        <section className='min-h-screen pb-8' id='about' style={{ backgroundColor: props.webMode === 'light' ? 'rgb(252,252,252)' : 'rgb(32,32,43)' }}>
            <h1 className='text-3xl text-center font-bold' style={{ color: props.webMode === 'light' ? 'black' : 'white' }}>About Me</h1>

            <div className='about-container mt-9  p-3 m-16 rounded-3xl sm:p-1 sm:m-6'>

                <div className='about-section '>
                    <div className='left ml-24 mt-12 md:ml-60 lg:ml-24'>

                        <img src={picImage} alt='profile-pic' className=' h-96 w-96 sm:h-48 sm:w-60 rounded-[50%] ' />

                    </div>

                    <div className='right p-6 justify-center rounded-xl sm:p-1' >

                        <div className='flex text-xl mt-6 ml-12'>
                            <p className='about-tab active-tab-links mx-3' onClick={() => updateToggle(1)}>About</p>
                            <p className='about-tab' onClick={() => updateToggle(2)}>Education</p>
                            <p className='about-tab mx-3' onClick={() => updateToggle(3)}>Experience</p>
                        </div>
                        <div className='p-8 sm:p-3 sm:w-60 sm:ml-3' >

                            <div>


                                <div className={toggle === 1 ? "about-section-showcontent" : 'about-section-content'} >
                                    <div className=' p-3 relative sm:ml-1 md:ml-6 lg:ml-3'>


                                        <p className='my-3 mx-6 sm:mx-1 sm:text-sm '>I'm a dedicated and enthusiastic Aspiring Software Developer who enjoys being part of a successful and productive team.<br></br> I have strong technical and interpersonal skills. I have build and deployed various Full Stack and Frontend Projects such as an Ecommerce Website, Portfolio Website and a Notes Website.</p>
                                        <span className='text-lg font-semibold mx-6 sm:text-sm sm:mx-1'> My Technical Skills and languages </span>
                                        <div className='my-6 text-5xl sm:text-2xl'>
                                            <div className='flex my-6 sm:mx-1 cursor-pointer '>
                                                <img src='https://skillicons.dev/icons?i=html,css' alt='skills' className='h-12 mx-6 sm:mx-2 ' />

                                                <img src='https://skillicons.dev/icons?i=javascript,react' alt='skills' className='h-12 mx-6 sm:mx-2' />
                                                <img src='https://skillicons.dev/icons?i=java,spring' alt='skills' className='h-12 mx-6 sm:mx-2' />

                                                <img src='https://skillicons.dev/icons?i=nodejs,express' alt='skills' className='h-12 mx-6 sm:mx-2' />
                                            </div>

                                            <a href={Resume} download className='bg-blue-600 text-xl rounded-xl p-3 text-white mx-6 font-semibold hover:bg-blue-500 sm:text-sm'>Download CV</a>
                                        </div>

                                    </div>
                                </div>

                                <div className={toggle === 2 ? "about-section-showcontent" : 'about-section-content'} >
                                    <div className=' p-3 relative sm:ml-1 md:ml-6 lg:ml-36'>

                                        {Data.map((val, id) => {
                                            if (val.category === 'education') {
                                                return (
                                                    <AboutTabs key={id} icon={val.icon} year={val.year} title={val.title} description={val.description} />

                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className=' p-3 relative sm:ml-1 md:ml-6 lg:ml-36'>

                                    <div className={toggle === 3 ? "about-section-showcontent" : 'about-section-content'}>
                                        {Data.map((val, id) => {
                                            if (val.category === 'experience') {
                                                return (
                                                    <AboutTabs key={id} icon={val.icon} year={val.year} title={val.title} description={val.description} />
                                                )
                                            }
                                        })}
                                    </div>
                                </div>


                            </div>




                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
