import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './Banner'

const Login = () => {
  const {t} = useTranslation();
  return (
    <>
    <Banner  title={t('login.1')}/>
    </>
  )
}

export default Login


