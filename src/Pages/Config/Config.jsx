import React from 'react'
import ModelYgray from '../../assets/model-y-stealth-grey.jpg';

import StealthGray from '../../assets/button-stealth-grey.avif';
import PearlWhite from '../../assets/button-pearl-white.avif';
import DeepBlue from '../../assets/button-deep-blue-metallic.avif';
import SolidBlack from '../../assets/button-solid-black.avif';
import UltraRed from '../../assets/button-ultra-red.avif';
import QuickSilver from '../../assets/button-quicksilver.avif';

import InteriorDark from '../../assets/button-dark.avif';
import InteriorLight from '../../assets/button-light.avif';

import IndWheel from '../../assets/induction-wheel.avif';

import GemWheel from '../../assets/gemini-wheel.avif';


const Config = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-between px-4 md:px-10 py-6'>
      {/* Image section */}
      <section className=' w-full md:w-3/4'>
          <div className='sticky top-24'>
              <div className="h-96 bg-grey-200 flex items-center justify-center overflow-hidden mb-4">
                <img 
                  src={ModelYgray} alt="model-y" 
                  className="max-w-full h-auto transform scale-125" 
                  id='exterior-image' 
                />


              </div>
          </div>
      </section>
      {/* Side Bar */}
      <aside className=' w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2'>
        <h2 className="text-xl text-left font-light"> Configure your </h2>
        <h1 className='text-5xl text-left font-bold mb-5 text-gray-800'> Model Y</h1>

        {/* Trim Level */}
        <div className='my-8 pb-8'>

        </div>

        {/* Exterior buttons */}
        <div className='my-8 ' id='exterior-buttons'>
          <h3 className="font-semibold mb-2"> Exterior Colour</h3> 
          <div className='flex space-x-4'>
            <button className='btn-selected transition-transform duration-300 hover:scale-110'>
              <img src={StealthGray} alt="Stealth Gray" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={PearlWhite} alt="Pearl White" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={DeepBlue} alt="Deep Blue" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={UltraRed} alt="Ultra Red" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={SolidBlack} alt="Solid Black" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={QuickSilver} alt="Quick Silver" className="w-12" />
            </button>
          </div>
        </div>
        {/* Interior Buttons */}
        <div className='my-8' id='interior-buttons'>
          <h3 className="font-semibold mb-2"> Interior Colour</h3> 
          <div className='flex space-x-4'>
            <button className='btn-selected transition-transform duration-300 hover:scale-110'>
              <img src={InteriorDark} alt="Stealth Gray" className="w-12" />
            </button>
            <button className='transition-transform duration-300 hover:scale-110'>
              <img src={InteriorLight} alt="Pearl White" className="w-12" />
            </button>
            </div>
        </div>

        {/* Wheel Buttons */}
        <div className="mb-8" id="wheel-button">
          <h3 className="font-semibold mb-2"> Wheels </h3>
            <button className='btn-selected transition-transform duration-300 hover:scale-110 "'>
              <img src={IndWheel} alt="Stealth Gray" className="w-16" />
            </button>
            <button className=' transition-transform duration-300 hover:scale-110 ms-4'>
              <img src={GemWheel} alt="Stealth Gray" className="w-16"/>
            </button>
        </div>

        {/* Autopilot Packages */}
        <div className='mb-8' id='Auto-Pilot'>
          <h3 className='font-semibold mb-2'> Autopilot Packages</h3>
          <div className='mt-2 border rounded px-4 py-2 text-gray-700 hover:text-black hover:cursor-pointer'>
            <div className='flex justify-between w-full'>
              <span className='font-medium'> Full Self-Driving Capability</span>
              <span> £6,800</span>
            </div>
            <span className="mt-2 text-sm">
              Includes Enhanced Autopilot, plus Traffic Light and Stop Sign Control. 
              Additionally, in future updates, your vehicle will be able to drive itself 
              almost anywhere with minimal driver intervention.
            </span>
          </div>
          <div className='mt-2 border rounded px-4 py-2 text-gray-700 hover:text-black hover:cursor-pointer'>
            <div className='flex justify-between w-full'>
              <span className='font-medium'> Enhanced Autopilot</span>
              <span> £3,400</span>
            </div>
            <span className="mt-2 text-sm">
              Includes Basic Autopilot, plus driver-initiated assisted driving 
              from motorway on-ramp to off-ramp, lane changes and overtaking. 
              Also includes Dumb Summon, 
              Actually Smart Summon and Autopark.
            </span>
          </div>
          <div className='mt-2 border rounded px-4 py-2 text-gray-700 hover:text-black hover:cursor-pointer'>
            <div className='flex justify-between w-full'>
              <span className='font-medium'> Basic Autopilot</span>
              <span> Included</span>
            </div>
            <span className="mt-2 text-sm">
              Includes Autosteer and traffic-aware cruise control.
            </span>
          </div>
        </div>
        {/* Charging */}
        <div className='mb-8' id='Charging'>
          <h3 className='font-semibold mb-2'> Charging</h3>
        </div>
      </aside>
    </div>
  )
}

export default Config;