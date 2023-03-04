import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">{t('not.1')}</span> {t('not.2')}</p>
                    <p class="lead">
                        {t('not.3')}
                    </p>
                    <Link to="/" class="btn btn-primary">{t('not.4')}</Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage