import React from 'react'
import html from '../images/html.png'
import javascript from '../images/JavaScript.png'

import reactjs from '../images/reactjs.png'
import css from '../images/css.png'

import nodejs from '../images/nodejs.png'
import java from '../images/java.png'

const Skills = (props) => {
     const skill = [
        {
            id: 1,
            logo: html,
            level: 'Expert',
            skillCount: 90,      
        },
        {
            id: 2,
            logo: javascript,
            level: 'Intermediate',
            skillCount: 80,
        },
        {
            id: 3,
            logo: reactjs,
            level: 'Intermediate',
            skillCount: 80,
        },
        {
            id: 4,
            logo: css,
            level: 'Intermediate',
            skillCount: 80,
        },
        {
            id: 5,
            logo: nodejs,
            level: 'Beginner',
            skillCount: 60,
        },
        {
            id: 6,
            logo: java,
            level: 'Beginner',
            skillCount: 60,
            color: 'blue'
        },
     ]
  return (

    <section className='min-h-screen pb-8' id='skills'  style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
        <h1 className='text-3xl text-center font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>Skills</h1>
    <div className=' m-16 rounded-3xl sm:m-6'  >
        <div className='flex items-center justify-center mt-8 gap-3 flex-wrap p-6 mx-16'>



        {skill.map(({id, logo, level, skillCount}) => {

            return(
           

        <div className=' min-w-[rem] max-w-[16rem] bg-white shadow-xl p-8 rounded-xl mx-16 sm:p-6 mt-6'  key={id} >

            <div style={ {background:`conic-gradient(rgb(8,145,160) ${skillCount}%, #ddd ${skillCount}%)` }} 
            className='w-36 h-36 flex items-center justify-center rounded-full '>
            <div className='text-6xl w-32 h-32 bg-gray-200 rounded-full flex justify-center items-center'>
            <img className= 'h-16' src = {logo} alt='Image is not available'></img>
            </div>
            </div>
            <p className='text-xl my-3 text-center'>{level}</p>
        </div>
           
        )
        })}
        
        </div>
        </div>
    </section>
  )
}

export default Skills
