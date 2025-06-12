import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div className='border-t border-gray-300'>
      
      <div className='pt-10 text-2xl text-center'>
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className='flex flex-col sm:flex-row my-10 gap-10 px-4 sm:px-0'>
        <img src={assets.about_img} className='w-full sm:max-w-[450px] ' alt="About Us" />
        
        <div className='flex flex-col gap-5 text-start text-gray-600 justify-center w-full sm:w-2/4'>
          <p>
            zyrawear was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, 
            and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater 
            to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive 
            collection sourced from trusted brands and suppliers.
          </p>
          <p className='text-black font-medium'>Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to 
            providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className='pt-10 text-xl text-center'>
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

  
      <div className='flex flex-col lg:flex-row mb-20 text-sm gap-4 px-4 sm:px-0'>
        <div className='flex flex-col gap-3 py-10 px-6 border border-gray-300 w-full lg:w-1/3 shadow-xl'>
          <b>Quality Assurance:</b>
          <p className='text-sm text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>

        <div className='flex flex-col gap-3 py-10 px-6 border border-gray-300 w-full lg:w-1/3 shadow-xl'>
          <b>Convenience:</b>
          <p className='text-sm text-gray-600'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>

        <div className='flex flex-col gap-3 py-10 px-6 border border-gray-300 w-full lg:w-1/3 shadow-xl'>
          <b>Exceptional Customer Service:</b>
          <p className='text-sm text-gray-600'>
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

    
      <Subscribe />
    </div>
  )
}

export default About
