import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './common/Banner'
import SecContact from './contact/SecContact';

const Contact = () => {
  const {t} = useTranslation();
  return (
    <>
    <Banner title={t('navbar.5')}/>
    <SecContact/>
    </>
  )
}

export default Contact