import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Ourstory } from '../Pages/Ourstory'
import { Services } from '../Pages/Services'
import { Contactus } from '../Pages/Contactus'
export const Navbar = () => {
  return (
    <div className='main'>
      <Link className='link' to='/'>Home</Link>
       <Link  className='link' to='/Services'>Services</Link>
       <Link className='link' to='/Ourstory'>Womens</Link>
       <Link  className='link' to='/Contactus'>About</Link>
        
    </div>
  )
}
