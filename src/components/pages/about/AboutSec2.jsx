import React from 'react'
import { useTranslation } from 'react-i18next'

const Sec2 = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="p-5 text-center bg-image rounded-3">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">BROOKS SHOES</h1>
                            <h4 className="mb-3">{t('about.3')}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sec2