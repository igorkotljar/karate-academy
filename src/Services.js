import React from 'react'
import NavBar from './NavBar'

function Services() {
  return (
    <div>
      <NavBar/>
      <h1>Our Services</h1>
      <div class="wrapper">
        <div className='services'>
          <div className='qaService'>
            {/* QA Service */}
          </div>
          <div className='reactjsService'>
            {/* ReactJS Service */}
          </div>       
          <div className='devopsService'>
            {/* DevOps Service */}
          </div>             
        </div>
      </div>
      <h1>And btw, they are responsive ;). But not this text xD.</h1>
    </div>
  )
}

export default Services