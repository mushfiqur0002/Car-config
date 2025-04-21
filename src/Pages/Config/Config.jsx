import React, { useState } from 'react';

// Exterior colours
import StealthGrey from '../../assets/button-stealth-grey.avif';
import PearlWhite from '../../assets/button-pearl-white.avif';
import DeepBlue from '../../assets/button-deep-blue-metallic.avif';
import SolidBlack from '../../assets/button-solid-black.avif';
import UltraRed from '../../assets/button-ultra-red.avif';
import QuickSilver from '../../assets/button-quicksilver.avif';

// Interior colours
import InteriorDark from '../../assets/button-dark.avif';
import InteriorLight from '../../assets/button-light.avif';

// Exterior Image
import ModelYgrey from '../../assets/model-y-stealth-grey.jpg';
import ModelYwhite from '../../assets/model-y-pearl-white.jpg';
import ModelYblue from '../../assets/model-y-deep-blue-metallic.jpg';
import ModelYblack from '../../assets/model-y-solid-black.jpg';
import ModelYred from '../../assets/model-y-ultra-red.jpg';
import ModelYsilver from '../../assets/model-y-quicksilver.jpg';

// Interior Image
import InteriorDarkImg from '../../assets/model-y-interior-dark.jpg';
import InteriorLightImg from '../../assets/model-y-interior-light.jpg';


//Wheels
import IndWheel from '../../assets/Induction-Wheel.avif';
import GemWheel from '../../assets/Performance-Wheel.avif';


const Config = () => {
  const [imageView, setImageView] = useState('exterior');

  const [selectedExterior, setSelectedExterior] = useState({
    name: 'Stealth Grey',
    image: ModelYgrey,
    price: 0
  });
  const [selectedInterior, setSelectedInterior] = useState({
    name: 'Dark Interior',
    image: InteriorDarkImg,
    price: 0
  });

  const [selectedWheel, setSelectedWheel] = useState({
    name: 'Induction Wheel',
    image: IndWheel,
    price: 0
  });

  const [selectedAutopilot, setSelectedAutopilot] = useState({
    name: 'Basic Autopilot',
    price: 0
  });

  const [selectedCharging, setSelectedCharging] = useState({
    name: 'none',
    price: 0
  })

  const basePrice = 39999;
  const totalPrice = basePrice + selectedAutopilot.price + selectedCharging.price + selectedExterior.price + selectedInterior.price + selectedWheel.price;
  return (
    <div className=' flex flex-col md:flex-row justify-between px-4 md:px-10 py-6'>
      {/* Image section */}
      <section className=' w-full md:w-3/4'>
          <div className='sticky top-24'>
              <div className="h-96 bg-grey-200 flex items-center justify-center overflow-hidden mb-4">
                <img 
                  src={imageView === 'exterior' ? selectedExterior.image : selectedInterior.image} 
                  alt="model-y" 
                  className="max-w-full h-auto transform scale-125"
                />
              </div>
          </div>
      </section>
      {/* Side Bar Controls */}
      <aside className=' w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2'>
        <h2 className="text-xl text-left font-light"> Configure your </h2>
        <h1 className='text-5xl text-left font-bold mb-5 text-gray-800'> Model Y</h1>

        {/* Exterior Colours buttons */}
        <div className='my-8 ' id='exterior-buttons'>
          <h3 className="font-semibold mb-2"> Exterior Colour</h3> 
          <div className='flex space-x-4'>
            <button onClick={() =>{
              setSelectedExterior({
                name: 'Stealth Grey',
                image: ModelYgrey,
                price: 0
              });
              setImageView('exterior');
              }} className='transition-transform duration-300 hover:scale-110'>
              <img src={StealthGrey} alt="Stealth Gray" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedExterior({
                name: 'Pearl White',
                image: ModelYwhite,
                price: 0
              });
              setImageView('exterior');
            }}className='transition-transform duration-300 hover:scale-110'>
              <img src={PearlWhite} alt="Pearl White" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedExterior({
                name: 'Deep Blue',
                image: ModelYblue,
                price: 0
              });
              setImageView('exterior');
              }}className='transition-transform duration-300 hover:scale-110'>
              <img src={DeepBlue} alt="Deep Blue" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedExterior({
                name: 'Ultra Red',
                image: ModelYred,
                price: 0
              });
              setImageView('exterior');
              }}className='transition-transform duration-300 hover:scale-110'>
              <img src={UltraRed} alt="Ultra Red" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedExterior({
                name: 'Solid Black',
                image: ModelYblack,
                price: 0
              });
              setImageView('exterior');
              }}className='transition-transform duration-300 hover:scale-110'>
              <img src={SolidBlack} alt="Solid Black" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedExterior({
                name: 'Quick Silver',
                image: ModelYsilver,
                price: 0
              })
              setImageView('exterior');
              }} className='transition-transform duration-300 hover:scale-110'>
              <img src={QuickSilver} alt="Quick Silver" className="w-12" />
            </button>
          </div>
        </div>

        {/* Interior Button Colours */}
        <div className='my-8' id='interior-buttons'>
          <h3 className="font-semibold mb-2"> Interior Colour</h3> 
          <div className='flex space-x-4'>
            <button onClick={() => {
              setSelectedInterior({
                name: 'Dark Interior',
                image: InteriorDarkImg,
                price: 0
              });
              setImageView('interior');
              }} className='transition-transform duration-300 hover:scale-110'>
              <img src={InteriorDark} alt="Dark Interior" className="w-12" />
            </button>
            <button onClick={() => {
              setSelectedInterior({
                name: 'Light Interior',
                image: InteriorLightImg,
                price: 1500
              });
              setImageView('interior');
              }} className='transition-transform duration-300 hover:scale-110'>
              <img src={InteriorLight} alt="Light Interior" className="w-12" />
            </button>
            </div>
        </div>

        {/* Wheel Buttons */}
        <div className="mb-8" id="wheel-button">
          <h3 className="font-semibold mb-2"> Wheels </h3>
            <button onClick={() => {
              setSelectedWheel({
                name: 'Induction Wheel',
                image: IndWheel,
                price: 0
              });
              }} className='transition-transform duration-300 hover:scale-110 "'>
              <img src={IndWheel} alt="Induction Wheel" className="w-16" />
              <p className=' text-sm'> Standard</p>
            </button>
            <button onClick={() => {
              setSelectedWheel({
                name: 'Performance Wheel',
                image: GemWheel,
                price: 2000
              });
              }} className=' transition-transform duration-300 hover:scale-110 ms-4'>
              <img src={GemWheel} alt="Gemini Wheel" className="w-16"/>
              <p className=' text-sm's> Performance</p>
            </button>
        </div>

        {/* Autopilot Packages */}
        <div className='mb-8' id='Auto-Pilot'>
          <h3 className='font-semibold mb-2'> Autopilot Packages</h3>
          <div className={`mt-2 border rounded px-4 py-2 text-gray-700 hover:cursor-pointer ${selectedAutopilot.name === 'Basic Autopilot' ? 'border-black': ''}`} onClick={() => 
            setSelectedAutopilot({ 
              name: 'Full Self-Driving Capability', 
              price: 6800 
              })}>
            
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
          <div className='mt-2 border rounded px-4 py-2 text-gray-700 hover:cursor-pointer' onClick={() =>
            setSelectedAutopilot({
              name: 'Enhanced Autopilot',
              price: 3400
            })}>
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
          <div className='mt-2 border rounded px-4 py-2 text-gray-700 hover:cursor-pointer' onClick={() => 
            setSelectedAutopilot({ 
              name: 'Basic Autopilot',
              price: 0
            })}>
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
          <h3 className='font-semibold'> Charging</h3>
          <p>Every Tesla includes access to the largest global Supercharging network</p>
            <div className={`mt-2 border rounded px-4 py-2 text-gray-700  hover:cursor-pointer ${selectedCharging.name === 'Wall Connector' ? 'text-black': 'text-gray-700'}`} onClick={() => 
              setSelectedCharging({
                name: 'Wall Connector',
                price: 475
              })}>
              <div className='flex justify-between w-full'>
                <span className='font-medium' >Wall Connector</span>
                <span>£475</span>
              </div>
              <span className="mt-2 text-sm">
                  Our recommended home charging solution.
                </span>
            </div>
            <div className={`mt-2 border rounded px-4 py-2 text-gray-700  hover:cursor-pointer ${selectedCharging.name === 'Mobile Connector' ? 'text-black': 'text-gray-700'}`} onClick={() => 
              setSelectedCharging({
                name: 'Mobile Connector',
                price: 180
              })}>
              <div className='flex justify-between w-full'>
                <span className='font-medium' >Mobile Connector</span>
                <span>£180</span>
              </div>
              <span className="mt-2 text-sm">
                  Useful when away from home on extented trips.
                </span>
            </div>
        </div>
        {/* Price and total*/}
        <div className='mt-4 text-center' id='Payment'>
          <h1 className='text-4xl font-bold'> Your Model Y</h1>
          <p>Est. delivery: April 2026</p>

        
          <div className=' text-left mt-4'>
            <p><strong>Exterior Colour:</strong> {selectedExterior.name}</p>
            <p><strong>Interior:</strong> {selectedInterior.name}</p>
            <p><strong>Wheels:</strong> {selectedWheel.name}</p>
            <p><strong>Autopilot Package:</strong> {selectedAutopilot.name}</p>
          </div>
        </div>

        <div className='mt-4'>
          <div className='flex font-semibold text-lg lg:text-2xl'>
            <h3>Total Price</h3>
            <p className='ml-28' id='total-price'>£{totalPrice.toLocaleString()}</p>
          </div>
            <p>Includes VAT of £{Math.round(totalPrice * 0.2).toLocaleString()}</p>
        </div>
      </aside>
    </div>
  )
}

export default Config;