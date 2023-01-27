import React from 'react'
import './Home.css'
import wave from '../../assets/wave.svg'
import shop from '../../assets/shop.jpg'

const Home = () => {
  return (
    <main className='home-container'>
      <div className='home'>
        <section className='section-left'>
          <img src={shop} alt='' />
        </section>
        <section className='section-right'>
          <div className='text-container'>
            Shop everything from our shop, within a few clicks! <br />
              <span>
              We offer a wide variety of products for all your needs, we have something for everyone.
              </span>
          </div>
        </section>
      </div>
      <div className='wave-container'>
        <img src={wave} alt='' />
      </div>
    </main>
  )
}

export default Home