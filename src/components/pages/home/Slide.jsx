import React from 'react'
import { useTranslation } from 'react-i18next'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'



const Slide = () => {

    const {t} = useTranslation()
  return (
    <Carousel className='owl-theme' loop margin={10} nav>
      <div className='one'>
        <div className="home-write d-flex justify-content-center align-items-start flex-column">
        <h1>{t('banner.1')}</h1>
        <Link className='btn mt-3 ms-5' to='/products'>{t('banner.2')}</Link>
        </div>
      </div>
      <div className='two'>
      </div>
      <div className='three'>
        
      </div>
    </Carousel>

  )
}

export default Slide