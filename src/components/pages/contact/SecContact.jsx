import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const SecContact = () => { 
    const {t} = useTranslation();
    return (
        <>
            <Container className='my-5'>
                <div className="common">
                    <div className="contactus text-center text-light pt-5">
                        <h1>{t('contact.1')}</h1>
                    </div>
                    <div className="text d-flex">
                        <div className="left-text d-flex justify-content-center align-items-center flex-column">
                            <input className='my-4' type="text" placeholder={t('contact.2')} />
                            <input className='my-4' type="text" placeholder={t('contact.3')} />
                            <input className='my-4' type="text" placeholder={t('contact.4')} />
                        </div>
                        <div className="right-text d-flex justify-content-center align-items-center">
                            <input type="text" placeholder={t('contact.5')} />
                        </div>
                    </div>
                        <div className="button-contact text-center">
                            <button className='btn btn-secondary'>{t('contact.6')}</button>
                        </div>
                </div>
            </Container>
        </>
    )
}

export default SecContact