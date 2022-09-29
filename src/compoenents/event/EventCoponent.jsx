import React from 'react'
import eventImage from "../../assets/add.svg"
import "./event.styles.css";

const EventCoponent = () => {
  return (
    <section className='create-event-container'>
    <div className='flex'>
       <div className='event-name items-center'>
        <h1 className='text-4xl font-bold tracking-tight birthday-heading sm:text-5xl md:text-6xl'>Birthday Bash</h1>
        <h6 className='event-text'>Hosted by Elysia</h6>


        <div className='event-details'>
    <div className='event-date'>
      <span className='icon'></span>
      <div className='date-time'>
          <p>18 August 6:00PM</p>
          <p>to 19 August 1:00PM UTC +10</p>
      </div>
      <span className='arrow'></span>
    </div>

    <div className='event-address'>
      <span className='icon'></span>
      <div className='date-time'>
          <p>Street name</p>
          <p>Suburb, State, Postcode</p>
      </div>
      <span className='arrow'></span>
    </div>

  </div>
      </div>


     <div className="flex justify-center items-center w-full">
       <div className='image-uplaod'>
       <img src={eventImage}/>
        </div>
      </div>
    </div>

    </section>
  )
}

export default EventCoponent
