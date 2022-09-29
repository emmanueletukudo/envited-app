import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-wite p-6 envited-nav">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <img src={logo} alt="envited.io"/>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-white rounded envited-btn-gradient hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          </div>
          <div>
            <Link to="#" className="inline-block envited-btn-gradient envited-btn-sm mt-4 lg:mt-0">login/signup</Link>
          </div>
        </div>
      </nav>

      <main className='wrapper'>
      <Outlet/>
      </main>
    </div>
  )
}

export default Navigation
