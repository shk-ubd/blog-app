import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  const navigate = (url) =>{ 
    window.open(url, "_blank")
  }
  return (
    <section className="overflow-hidden pt-10 pb-3 bg-[#00040F] ">
      <div className=" mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-full lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/3 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 sm:mb-9  text-xs font-semibold uppercase text-white">
                Company
              </h3>
              <ul>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60  hover:text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/3 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 sm:mb-9  text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/3 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-3 sm:mb-9  text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2 sm:mb-4">
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm sm:text-base font-medium text-white/60 hover:text-white"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='mt-6 border-t-2 border-t-white/50 pt-8 px-0 md:pt-4 w-[90%]  flex justify-evenly lg:justify-end gap-7'>
          <button
          onClick={()=>{navigate("https://github.com/shk-ubd")}}
            className=" w-36 group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
          >
            <svg
              className="w-6 h-6 fill-neutral-50"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                className="svg-fill-primary"
                d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
              ></path>
            </svg>
            Github
          </button>

          <button
          onClick={()=>{navigate("https://www.linkedin.com/in/sheikh-ubaid/")}}
            className="w-36 group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
          >
            <svg 
              className="w-6 h-6 fill-neutral-50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
            LinkedIn
          </button>

        </div>
      </div>

    </section>
  )
}

export default Footer