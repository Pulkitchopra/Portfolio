import React from 'react'

const Services = (props) => {

    const services = [
        {

            id: 1,
            image: 'fa-solid fa-code',
            Title: 'Frontend Development',
            Description: 'Frontend Development Services using React, JavaScript, HTML, CSS '

    },
        {

            id: 2,
            image: 'fa-solid fa-laptop-code',
            Title: 'Full-Stack Development',
            Description: 'Full-Stack Development Services using React, JavaScript, MongoDB, Express JS, Node JS'

    },
        {

            id: 3,
            image: 'fa-solid fa-laptop-code',
            Title: 'Design',
            Description: 'UI/UX Design Build using Figma'

    },
]
  return (
   <section className='pb-8' id='services' style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
   <h1 className='text-center text-3xl font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>My Services</h1>
    <div className='p-24 grid grid-cols-3 gap-x-3 m-16 bg-gray-200 rounded-3xl sm:grid-cols-1 sm:p-6 sm:gap-y-6 sm:m-6 md:grid-cols-1 md:gap-y-6 lg:grid-cols-3'>
    {services.map(({id, image, Title, Description}) => {
        return(

    <div className=' p-3 text-center rounded-3xl h-60 mx-6 hover:translate-y-[-10px] card-section sm:mx-3 sm:p-2' key={id}>
        <i className={`${image} text-3xl mt-8 sm:text-2xl`}></i>
        <h1 className='text-xl text-white font-semibold my-3 sm:text-lg'>{Title}</h1>
        <p className='text-md my-3'>{Description}</p>
    </div>
        )
    })}

        
    </div>
   </section>
  )
}

export default Services
