import React from 'react'
import DataPage from './home/DataPage'
import Photo from './home/Photo'
import Slide from './home/Slide'

const Home = () => {
  return (
    <div>
      <Slide />
      <DataPage/>
      <Photo/>
    </div>
  )
}

export default Home