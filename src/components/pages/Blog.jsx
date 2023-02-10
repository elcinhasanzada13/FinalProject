import React from 'react'
import { useTranslation } from 'react-i18next';
import Banner from './common/Banner';

const Blog = () => {
  const {t} = useTranslation();
  return (
    <>
    <Banner title={t('navbar.3')}/>
    </>
  )
}

export default Blog