import React from 'react'

const AboutTabs = (props) => {
  return (
    <div className=' relative pl-1 pb-0 education-container '>
      <i className={props.icon}></i>
      <h1 className=' text-sm text-gray-600 '>{props.year}</h1>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default AboutTabs
