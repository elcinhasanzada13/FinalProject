import React from 'react'
import { Container, Row } from 'react-bootstrap'
import men from '../../assets/img/home/formen.webp'
import women from '../../assets/img/home/forwomen.webp'
import kids from '../../assets/img/home/forkids.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Photo = () => {

    const { t } = useTranslation();
    return (
            <Container className='py-5 d-flex justify-content-center align-items-center gap-5'>
                <Row>
                
                <div className="allphoto d-flex gap-5">
                <div className="one-photo">
                    <img width={350} src={men} alt="" />
                    <div className="buy-button d-flex align-items-center justify-content-between">
                        <h4 className='liststyle'>{t('products.5')}</h4>
                        <Link to='/products' className='liststyle'>{t('products.11')} <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="two-photo mt-5">
                    <img width={350} src={women} alt="" />
                    <div className="buy-button d-flex align-items-center justify-content-between">
                        <h4 className='liststyle'>{t('products.6')}</h4>
                        <Link to='/products' className='liststyle'>{t('products.11')} <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="three-photo">
                    <img width={350} height={466} src={kids} alt="" />
                    <div className="buy-button d-flex align-items-center justify-content-between">
                        <h4 className='liststyle'>{t('products.7')}</h4>
                        <Link to='/products' className='liststyle'>{t('products.11')} <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                </div>
                </Row>
            </Container>
    )
}

export default Photo