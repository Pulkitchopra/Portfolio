import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navlinks = [
    { id: 1, name: 'fa-solid fa-house', link: '#home' },
    { id: 2, name: 'fa-solid fa-user', link: '#about' },
    { id: 3, name: 'fa-solid fa-laptop', link: '#projects' },
    { id: 4, name: 'fa-solid fa-pencil', link: '#skills' },
    { id: 5, name: 'fa-solid fa-briefcase', link: '#services' },
    { id: 6, name: 'fa-solid fa-address-book', link: '#contact' },
  ];


  return (

    <nav className='bg-gray-500 w-max p-1 z-10 fixed left-[50%] translate-x-[-50%] bottom-2 flex rounded-3xl sm:w-80'>

      <ul className='flex m-1 mx-8 text-lg sm:mx-2  '>
        <button className=' h-8 w-8 rounded-3xl hover:bg-gray-200 ' onClick={props.toggleMode}>{props.webMode === 'light' ? <i className="fa-solid fa-circle-half-stroke"></i> : <i class="fa-light fa-circle-half-stroke"></i>}</button>
        {navlinks.map(({ id, name, link }) => {

          return (
            <li key={id} className='mx-3 sm:mx-2'>
              <a href={link} className=' rounded-xl bg-transparent p-1 hover:bg-gray-200 '><i className={`${name}`}></i></a>
            </li>
          )
        })}
      </ul>
    </nav>




















    // <aside className='flex-col fixed w-36 h-6 justify-between min-h-screen'>
    // <div className='bg-gray-200 fixed left-6 top-36 py-3 w-16 justify-between rounded-3xl h-96'>

    // <h1>P</h1> 
    // <nav>
    // <div className='flex items-center justify-between'>

    //   <ul className='flex flex-col mx-6 gap-y-3 my-16 text-lg  '>
    //   <ul className='flex justify-between '>
    //     {navlinks.map(({ id, name, link }) => {

    //       return (
    //         <li key={id}>
    //           <a href={link}>{name}</a>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div>
    //   </nav>
    //        <li><a href='home' className='nav_icons'><i className="fa-solid fa-house"></i></a></li>
    //          <li><a href='about' className='nav_icons '><i className="fa-solid fa-user"></i></a></li>
    //          <li><a href='projects' className='nav_icons'><i className="fa-solid fa-laptop"></i></a></li>
    //          <li><a href='skills' className='nav_icons'><i className="fa-solid fa-pencil"></i></a></li>
    //          <li><a href='services' className='nav_icons'><i className="fa-solid fa-briefcase"></i></a></li>
    //         <li><a href='contact' className='nav_icons'><i className="fa-solid fa-address-book"></i></a></li>
    //        </ul>
    //    </div>
    //   </aside>

  )
}

export default Navbar
