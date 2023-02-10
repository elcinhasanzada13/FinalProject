import React from 'react'
import { useTranslation } from 'react-i18next'
import about1 from '../../assets/img/about/shoes-1.png'

const Sec1 = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="container sec-1 col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div data-aos="fade-left" className="images col-10 col-sm-8 col-lg-6">
                        <img src={about1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6 write">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{t('about.1')}</h1>
                        <p className="lead">{t('about.2')}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sec1