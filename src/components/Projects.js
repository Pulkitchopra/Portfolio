import React from 'react'
import logo from '../project -1.jpg'
import ecommerce from '../ecommerce.avif'
import notebook from '../notes app.png'

const Projects = (props) => {

    const projects = [
        {
            id: 1,
            logo: logo,
            Title: "Portfolio Website",
            Description: "Designed and deployed a responsive Personal Portfolio website.",
            skills: "React"
        },
        {
            id: 2,
            logo: ecommerce,
            Title: "ECommerce Website",
            Description: "Build and deployed a responsive Full Stack E - Commerce website",
            skills: "React",
        },
        {
            id: 3,
            logo: notebook,
            Title: "Notes Website",
            Description: "Notes website for writing, adding, deleting and updating notes.",
            skills: "React"
        },

    ]
    return (
        <section className='min-h-screen pb-8' id='projects'  style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
            <h1 className='text-3xl text-center font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>Projects</h1>
            <div className='p-6 m-16 bg-gray-200 rounded-3xl sm:m-8' >
                {/* <div className='flex basis-3/5 gap-x-8'> */}

                {/* <div className='grid grid-cols-2 p-6 ml-36 gap-x-6'> */}

                {projects.map(({ id, logo, Title, Description, skills }) => {
                    return (
                        <div className='flex justify-center my-8' key={id}>
                            <div className=' border-2 border-gray-600 flex sm:grid bg-gray-50'>

                                <div className='p-3'>
                                    <img src={logo} className='h-60 w-80 sm:h-48' alt='' />
                                </div>
                                <div className='right w-60 p-3 sm:p-1'>
                                    <h1 className='text-center white mt-3 text-lg font-semibold sm:ml-8 sm:mt-1'>{Title}</h1>
                                    <p className='my-3 mx-3 sm:text-center sm:ml-8'>{Description}</p>
                                    <button className='bg-gray-200 p-1 rounded ml-6 my-3 sm:ml-16'>React</button>
                                    <button className='bg-gray-200 p-1 rounded ml-3 my-3'>CSS</button>
                                    {/* <button className='bg-gray-200 p-1 rounded ml-3 my-3'>{skills}</button> */}
                                    <div className='grid grid-cols-2 content-end sm:ml-8'>

                                        <a href='https://github.com/Pulkitchopra' className='btn text-center'>Code <i className="fa-brands fa-github"></i> </a>
                                        <a href='https://github.com/Pulkitchopra' className='btn text-center'>Project</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* </div> */}
                {/* <div className='bg-gray-600 basis-2/5'>
                    <img src={picImage} alt='' className='h-96'/>
                    </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Projects
