import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eaque dolor fugiat quas, neque blanditiis, modi repellat cumque est veritatis vero dignissimos laboriosam a illum dicta ullam vitae. Sint, soluta.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quia ratione id deleniti nam dicta totam quas eius maiores cupiditate impedit, odio ad a in blanditiis eveniet? Accusantium, ullam illum?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia eaque laborum inventore necessitatibus corporis aliquid, vitae adipisci quas quia velit beatae, odit, obcaecati ut consectetur quis possimus. Dolorem, ex?</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique sed laborum nihil eligendi suscipit dolor repellendus ipsa quibusdam, ut quisquam beatae a libero quo facere. Odit reiciendis aliquam eaque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique sed laborum nihil eligendi suscipit dolor repellendus ipsa quibusdam, ut quisquam beatae a libero quo facere. Odit reiciendis aliquam eaque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique sed laborum nihil eligendi suscipit dolor repellendus ipsa quibusdam, ut quisquam beatae a libero quo facere. Odit reiciendis aliquam eaque.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
