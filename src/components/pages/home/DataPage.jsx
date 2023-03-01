import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import homedata from '../../data/homedata'

const DataPage = () => {
    const { t } = useTranslation()
    return (
        <>
                <div className="soon mb-5">
                    <h1 className='text-center text-light mb-5'>{t('products.9')}</h1>
                </div>
            <Container className='pb-5'>
                <div className="ms-5">
                    <Link to='/products' className='btn btn-primary' id='btn-home'>{t('products.10')}</Link>
                </div>
                <Row className='gap-5 mt-5 ms-5'>
                    {homedata.map((data,i) => {
                        const { img, name, desc, title, price } = data
                        return (
                            <div key={i} className="card-style">
                                <img src={img} className="card-img-top" alt={name} />
                                <div className="card-body">
                                    <h5 className="card-title mt-2">{name} </h5>
                                    <h6 className="card-title">{desc.substring(0, 50)}... </h6>
                                    <p className="card-text for-title mt-2">{title}</p>
                                    <h4 className="card-text">{price}$</h4>
                                </div>
                                <div className='buttons my-3'>
                                    <button className='btn btn-danger soon' >{t('products.9')}...</button>
                                </div>
                            </div>
                        )
                    })}


                </Row>

            </Container>
            <div className="soon"></div>
        </>
    )
}

export default DataPage