import React from 'react'
import { Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import aboutdata from '../../data/aboutdata'

const Sec3 = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="my-5 text-center">
                <h1>{t('about.4')}</h1>
            </div>
            <Row>
                <div className="my-3 d-flex sec-3">
                    {aboutdata.map((data) => {
                        return (
                            <div key={data.id} className='d-flex write justify-content-center align-items-center flex-column'>
                                <h1>{data.number}</h1>
                                <p>{data.title}</p>
                            </div>
                        )
                    })}
                </div>
            </Row>
        </>
    )
}

export default Sec3