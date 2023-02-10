import React from 'react'
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Banner from './common/Banner';
import AboutSec1 from './about/AboutSec1'
import AboutSec2 from './about/AboutSec2'
import AboutSec3 from './about/AboutSec3'
import AboutSec4 from './about/AboutSec4';

const About = () => {
  const {t} = useTranslation();
  return (
    <>
    <Banner title={t('navbar.2')}/>
    <Container>
    <AboutSec1/>
    <AboutSec2/>
    <AboutSec3/>
    <AboutSec4/>
    </Container>
    </>
  )
}

export default About