import React from 'react'
import Hero from '../components/AboutUs/Hero'
import PageTitle from '../components/AboutUs/PagesTitle'
import Introduction from '../components/AboutUs/Introduction'

function About() {
  return (
    <div className='w-full' >
      <Hero/>
      <div className='mt-[100px]'>
      <PageTitle title='Who are We' />
      </div>
      <div className='w-full px-10 '>
        <Introduction/>
          
      </div>
      
      
    </div>
  )
}

export default About