import React from 'react'
import {serviceData} from './Data/ServicesData';


const Services = (props) => {

  return (
   <section className='pb-8' id='services' style={{backgroundColor: props.webMode === 'light'? 'rgb(248,248,248)': 'rgb(32,32,43)'}}>
   <h1 className='text-center text-3xl font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>My Services</h1>
    <div className='p-16 grid grid-cols-3 gap-x-3 m-10 rounded-3xl sm:grid-cols-1 sm:p-6 sm:gap-y-6 sm:m-6 md:grid-cols-1 md:gap-y-6 lg:grid-cols-3'>
    {serviceData.map(({id, image, Title, Description}) => {
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
