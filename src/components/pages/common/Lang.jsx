import React from 'react'
import { useTranslation } from 'react-i18next';
import './i18n/i18next'


const Lang = () => {
    const { i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
    
    return (
        <>
            <button className='btnLang ms-3' onClick={() => { handleClick('az') }}><img
                src="https://flagcdn.com/32x24/az.png"
                srcset="https://flagcdn.com/64x48/az.png 2x,https://flagcdn.com/96x72/az.png 3x"
                width="32"
                height="24"
                alt="Azerbaijan" /></button>
            <button className='btnLang ms-3' onClick={() => { handleClick('en') }}><img
                src="https://flagcdn.com/32x24/gb.png"
                srcset="https://flagcdn.com/64x48/gb.png 2x,https://flagcdn.com/96x72/gb.png 3x"
                width="32"
                height="24"
                alt="United Kingdom" /></button>
            
        </>
    )
}

export default Lang