import React, { useState } from 'react'
import './Navbar.css'
import  logoipsum  from '../../assets/logoipsum.svg'
import  ham  from '../../assets/ham.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleShowModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='nav-container'>
    <header className='nav-left'>
      <img src={logoipsum} alt='' />
        <div className='brand-name'>
          MyBusiness
            <span>
               Lorem Ipsum Dolor Sit Amet !
            </span>
        </div>
    </header>
    <header className='nav-right'>
      <div className='nav-links'>
        <Link to='/' className='link-class'>Home</Link>
        <Link to='/about' className='link-class'>About</Link>
      </div>
      
      <div className='ham-container'>
        <img src={ham} onClick={handleShowModal} alt='' />
      </div>

    </header>
    {isOpen && 
            <div className="menu-modal" >
            <span  className='close-button' onClick={handleCloseModal} >x</span>
              <div className='ham-links'>
              <Link to='/' className='ham-link'>Home</Link>
              <Link to='/about' className='ham-link'>About</Link>
              </div>
            </div>}
    </div>
  )
}

export default Navbar