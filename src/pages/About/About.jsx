import React from 'react'
import wave from '../../assets/wave 2.svg'
import Modal from '../../components/Form/Form'
import './About.css'

const About = () => {
  return (
    <main className='about-container'>
    <div className='about'>
      <Modal />
    </div>
    <div className='wave-container'>
        <img src={wave} alt='' />
      </div>
  </main>
  )
}

export default About