import React, { useState } from 'react'
import picImage from '../Pulkit_Chopra.jpg'
import AboutTabs from './AboutTabs'
import coding from '../coding.png'
import Resume from '../Pulkit Chopra Resume.pdf'



const About = (props) => {
    const Data = [
        {
            id: 1,
            category: 'education',
            icon: 'fa-solid fa-graduation-cap',
            title: 'College',
            year: '2018-2022',
            description: 'Manav Rachna University'
        },
        {
            id: 2,
            category: 'education',
            icon: 'fa-solid fa-graduation-cap',
            title: 'School',
            year: '2005-2017',
            description: 'General Raj School'
        },
        {
            id: 3,
            category: 'experience',
            icon: 'fa-solid fa-briefcase',
            title: 'Chegg India',
            year: '2021-present',
            description: 'Managed Network Expert'
        },
        {
            id: 4,
            category: 'experience',
            icon: 'fa-solid fa-briefcase',
            title: 'Aezmocorp',
            year: '2022',
            description: 'React JS Developer'
        },

    ]
    const [toggle, setToggle] = useState(1);
    const updateToggle = (id) => {
        setToggle(id)
    }
    return (

        <section className='min-h-screen pb-8' id='about'  style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
            <h1 className='text-3xl text-center font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>About Me</h1>
            <div className='about-container mt-8 bg-gray-200 p-3 m-16 rounded-3xl sm:p-1 sm:m-6'>

                <div className='about-section  '>
                    <div className='left ml-24 mt-8 md:ml-60 lg:ml-24'>
                        <img src={picImage} alt='' className=' h-[350px] sm:h-48 sm:w-60  ' />
                    </div>

                    <div className='right p-6 justify-center rounded-xl sm:p-1 ' >
                        <div className='p-8 sm:p-3 sm:w-60 sm:ml-3' >

                            <p className='my-3 mx-6 sm:mx-1 sm:text-sm '>I'm a dedicated and enthusiastic Aspiring Software Developer who enjoys being part of a successful and productive team.<br></br> I have strong technical and interpersonal skills. I have build and deployed various Full Stack and Frontend Projects such as an Ecommerce Website, Portfolio Website and a Notes Website.</p>
                            <span className='text-lg font-semibold mx-6 sm:text-sm sm:mx-1'> My Technical Skills and languages </span>
                            <div className='my-6 text-5xl sm:text-2xl'>
                                <div className='flex mx-3 my-6 sm:mx-1  '>
                                    <i className="fa-brands fa-html5 mx-6 sm:mx-2"></i>
                                    <i className="fa-brands fa-js mx-6 sm:mx-2"></i>
                                    <i className="fa-brands fa-react mx-6 sm:mx-2"></i>
                                    <i className="fa-brands fa-css3-alt mx-6 sm:mx-2"></i>
                                    <i className="fa-brands fa-node mx-6 sm:mx-2"></i>
                                    <i className="fa-brands fa-java mx-6 sm:mx-2"></i>
                                </div>

                                <a href= {Resume} download className='bg-blue-600 text-xl rounded-xl p-3 text-white mx-6 font-semibold hover:bg-blue-500 sm:text-sm'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-8'>

                    <div className='about-section flex ml-16 mr-16 sm:ml-1 sm:flex-col md:ml-1 md:mr-1 lg:ml-16 lg:mr-16'>
                        <div className=' justify-center basis-2/5 mb-8'>
                            <div className='flex text-lg justify-center mt-6 '>
                                <p className='about-tab active-tab-links mx-6' onClick={() => updateToggle(1)}>Education</p>
                                <p className='about-tab' onClick={() => updateToggle(2)}>Experience</p>

                            </div>
                            <div className={toggle === 1 ? "about-section-showcontent" : 'about-section-content'} >
                                <div className=' p-3 relative ml-36 mt-8 sm:ml-1 md:ml-6 lg:ml-36'>

                                    {Data.map((val, id) => {
                                        if (val.category === 'education') {
                                            return (
                                                <AboutTabs key={id} icon={val.icon} year={val.year} title={val.title} description={val.description} />

                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className=' p-3 relative ml-36 mt-8 sm:ml-1 md:ml-6 lg:ml-36'>

                                <div className={toggle === 2 ? "about-section-showcontent" : 'about-section-content'}>
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

                        <div className=' flex basis-2/5 justify-center sm:ml-8 '>
                            <img src={coding} className='h-96 sm:h-36 sm:w-[600px] md:h-80 lg:h-96 ' alt='' />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
