import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutSec4 = () => {
    const {t} = useTranslation();
  return (
    <>
    <div className="subscribe-all my-5">
        <div className="sub">
        <div className="sub-left">
            <p>{t('about.5')}</p>
            <h1>{t('about.6')}</h1>
            <h2>{t('about.7')}</h2>
        </div>
        <div className="sub-right d-flex justify-content-center align-items-center flex-column">
            <input type="text" placeholder={t('contact.3')} />
            <button className='btn btn-success my-3'>{t('about.8')}</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default AboutSec4