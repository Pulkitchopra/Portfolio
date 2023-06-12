import React from 'react'

const Skills = (props) => {
     const skill = [
        {
            id: 1,
            logo: 'fa-brands fa-html5',
            level: 'Expert',
            skillCount: 90,
            
        },
        {
            id: 2,
            logo: 'fa-brands fa-js',
            level: 'Intermediate',
            skillCount: 80
        },
        {
            id: 3,
            logo: 'fa-brands fa-react',
            level: 'Intermediate',
            skillCount: 80
        },
        {
            id: 4,
            logo: 'fa-brands fa-css3-alt',
            level: 'Intermediate',
            skillCount: 80
        },
        {
            id: 5,
            logo: 'fa-brands fa-node',
            level: 'Beginner',
            skillCount: 60
        },
        {
            id: 6,
            logo: 'fa-brands fa-java',
            level: 'Beginner',
            skillCount: 60
        },
     ]
  return (

    <section className='min-h-screen pb-8' id='skills'  style={{backgroundColor: props.webMode === 'light'? 'white': 'rgb(32,32,43)'}}>
        <h1 className='text-3xl text-center font-bold' style={{color: props.webMode === 'light'? 'black': 'white'}}>Skills</h1>
    <div className=' bg-gray-200 m-16 rounded-3xl sm:m-8' >
        <div className='flex items-center justify-center mt-8 gap-3 flex-wrap p-6 mx-16'>
        {skill.map(({id, logo, level, skillCount}) => {
            return(

        <div className=' min-w-[rem] max-w-[16rem] bg-gray-200 p-8 rounded-xl mx-16 sm:p-6'  key={id} >

            <div style={ {background:`conic-gradient(rgb(8,145,160) ${skillCount}%, #ddd ${skillCount}%)` }} 
            className='w-36 h-36 flex items-center justify-center rounded-full '>
            <div className='text-6xl w-32 h-32 bg-gray-200 rounded-full flex justify-center items-center'>
            <i className= {`${logo}`}></i>
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
