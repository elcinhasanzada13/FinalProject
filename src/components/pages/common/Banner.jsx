import React, { useEffect } from 'react'
import { NavLink } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="bg">
        <div className="banner">
          <h1 data-aos="zoom-out">{props.title}</h1>
          <p className='d-flex' data-aos="zoom-out-right"><NavLink to='/'><i className="fa-solid fa-house me-2"></i>{t('navbar.1')}</NavLink> <i className='fa-solid fa-angle-right mx-2 mt-2'></i> {props.title}</p>
        </div>
      </div>
    </>
  )
}

export default Banner