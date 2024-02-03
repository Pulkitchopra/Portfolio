import React from 'react'
import logo from '../images/project -1.jpg'
import notebook from '../images/notes app.png'
import cryptotracker from '../images/web-crypto-project.vercel.app_.png';
import netflixclone from '../images/netflix clone.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";




const Projects = (props) => {

    const projects = [
        {
            id: 1,
            logo: logo,
            Title: "Portfolio Website",
            Description: "Designed and deployed a responsive Personal Portfolio website using React JS and Tailwind CSS.",
            skills: "React",
            skill2: "Tailwind",
            source: 'https://pulkitchopra.github.io/portfolio/'
        },
        {
            id: 2,
            logo: cryptotracker,
            Title: "CryptoTracker",
            Description: "Build and deployed a responsive Cryptocurrency tracking website using React JS. ",
            skills: "React",
            skill2: "Material UI",
            source: 'https://web-crypto-project.vercel.app/'
        },
        {
            id: 3,
            logo: notebook,
            Title: "Notes Website",
            Description: "Notes website for writing, adding, deleting and updating notes.",
            skills: "React",
            skill2: "CSS",
            source: 'notebook'
        },
        {
            id: 4,
            logo: netflixclone,
            Title: "Netflix Clone",
            Description: "Designed and developed a Full Stack Netflix Clone using React JS and Firebase.",
            skills: "React",
            skill2: "CSS",
            source: 'https://web-netflix-clone.vercel.app/'
        },
    ]
    return (


        <section className='pb-8 min-h-screen' id='projects' style={{ backgroundColor: props.webMode === 'light' ? 'rgb(248,248,248)' : 'rgb(32,32,43)' }}>
            <h1 className='text-3xl text-center font-bold text-clip' style={{ color: props.webMode === 'light' ? 'black' : 'white' }}>Projects</h1>
            <div className='p-6 rounded-3xl sm:m-3 sm:p-4'>

            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            // autoplay={{
            //   delay: 5000,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation

            loop={true}>
                
                {projects.map(({ id, logo, Title, Description, source, skill2 }) => {


                    return (

                        <SwiperSlide key={id}>

                   
                        <div className='flex justify-center my-8 sm:my-3' key={id}>
                            <div className='flex sm:grid bg-white rounded-xl sm:rounded-xl shadow-xl'>

                                <div className='p-3'>
                                <a href={source}>    
                                    <img src={logo} className='h-96 w-[34rem] sm:h-48 rounded-md' alt='' />
                                </a>
                                </div>
                                <div className=' w-80 p-6 sm:p-8 h-96 my-3 sm:my-0'>
                                    <h1 className='text-center white mt-3 text-xl font-bold sm:mt-0'>{Title}</h1>
                                    <p className=' text-lg font-semibold my-6 sm:my-3 text-gray-500 text-center'>{Description}</p>
                                    <div className='flex gap-4 justify-center text-black'>
                                        <button className='bg-white p-2 rounded my-3 text-lg shadow-md'>React</button>
                                        <button className='bg-white p-2 rounded my-3 text-lg shadow-md'>{skill2} </button>
                                    </div>
                                    
                                    <div className='flex gap-8 justify-evenly my-6 sm:my-0 sm:mt-8 text-lg text-gray-800'>

                                        <a href='https://github.com/Pulkitchopra' className='btn text-center'>Code <i className="fa-brands fa-github"></i> </a>
                                        <a href={source} className='btn text-center'>Project <i className="fa-solid fa-arrow-up-right-from-square"></i> </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                    )
                })}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects
