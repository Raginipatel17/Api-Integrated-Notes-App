import React from 'react'
import { NavLink } from 'react-router-dom';
export function Nav() {
  return (

    <div className='sm:flex items-center lg:w-full sm:w-full w-full font-bold h-16 text-white p-2 sm:justify-between bg-black'>
        <h1 className='cursor-pointer sm:ps-10 text-2xl'><NavLink to="/">MakeNote!</NavLink></h1>
        <h1 className='cursor-pointer sm:pe-20'><NavLink to="/">Home</NavLink></h1>
    </div>
  )
}
