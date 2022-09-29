import React from 'react'
import eventImg from "../../assets/event_image.svg";
import "./home.styles.css";
const HomeComponent = () => {
  return (
  <section className='home-section'>
    <div class="flex">
  <div className='landing-image-container'>
  <div className='event-image-warpper'>
    <img  src={eventImg} className="event-image"/>
  </div>
  </div>
  <div className="sm:text-center lg:text-right landing-text">
         <div className='landing-text-container'>
         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Imagine if <br /> </span>
            <span className='block envited-text-gradient xl:inline'>Snapchat <br /></span>
            <span className="block xl:inline">had events.</span>
          </h1>
          <p className="mt-3 text-base text-align:right text-gray-500 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">Easily host and share events with
          your friends across any social media.</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
            <div className="rounded-md shadow">
              <a href="/create" className="flex w-full items-center justify-center envited-btn-gradient envited-btn-lg px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg">🎉 Create my event</a>
            </div>
          </div>
         </div>
        </div>
</div>
</section>
  )
}

export default HomeComponent
