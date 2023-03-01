import React from 'react'
import { useTranslation } from 'react-i18next'
import AboutCart from '../cart/AboutCart';
import Banner from './Banner'

const Cart = () => {

  const { t } = useTranslation();
  return (
    <>
      <Banner title={t('cart.1')} />
      <AboutCart/>
      
    </>
  )
}

export default Cart