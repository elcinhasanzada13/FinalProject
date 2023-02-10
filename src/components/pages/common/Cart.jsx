import React from 'react'
import { useTranslation } from 'react-i18next'
import CartAbout from '../cart/CartAbout';
import Banner from './Banner'

const Cart = () => {

  const { t } = useTranslation();
  return (
    <>
      <Banner title={t('cart.1')} />
      <CartAbout/>
    </>
  )
}

export default Cart