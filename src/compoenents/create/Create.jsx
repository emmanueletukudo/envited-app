import React from 'react'
import {Input} from "../form-fields"
import "./create.styles.css";
const Create = () => {
  return (
    <section className='create-event-container'>
    <div className='flex'>
       <div className='event-form'>
       <form>
      <Input
      type="text"
      label="Event Name"
      className="shadow envited-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Event name..."
      />
      <Input
      type="text"
      label="Host name"
      className="shadow envited-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Host name..."
      />
      <Input
      type="date"
      label="Start Time"
      className="shadow envited-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Start Time..."
      />
        <Input
      type="date"
      label="End Time"
      className="shadow envited-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="End Time..."
      />
       <Input
      type="text"
      label="Location"
      className="shadow appearance-none border envited-input rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Location..."
      />
      <div className="rounded-md shadow">
              <a href="/event" className="flex w-full items-center justify-center envited-btn-gradient envited-btn-lg px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg">Next</a>
            </div>
    </form>
  </div>

  <div className="flex justify-center items-center w-full">
    <div className='image-uplaod'>
        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
        </div>
      </div>
    </div>

    </section>

  )
}

export default Create
