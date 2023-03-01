import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/a.png'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className='main-footer'>
            <div className="container my-4">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3 log d-flex justify-content-center align-items-center">
                        <Link className='link-logo' to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="col-6 col-md-2 mb-3 footer-two d-flex justify-content-center align-items-center flex-column">
                            <h5>{t('footer.1')}</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 forclr"><i class="fa-solid fa-play"></i> {t('navbar.1')}</Link></li>
                                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 forclr"><i class="fa-solid fa-play"></i> {t('navbar.2')}</Link></li>
                                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 forclr"><i class="fa-solid fa-play"></i> {t('navbar.3')}</Link></li>
                                <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 forclr"><i class="fa-solid fa-play"></i> {t('navbar.4')}</Link></li>
                                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 forclr"><i class="fa-solid fa-play"></i> {t('navbar.5')}</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-3 footer-three">
                        <h5>{t('footer.4')}</h5>
                            <ul className="nav d-flex flex-column">
                                <li className="nav-item mb-0 "><p className='p-0'>{t('footer.5')}: 8:00-18:00</p></li>
                                <li className="nav-item mb-0 "><p className='p-0'>{t('footer.6')}: 09:00-21:00</p></li>
                                <li className="nav-item mb-0 "><p className='p-0'>{t('footer.7')}: 09:00-20:00</p></li>
                            </ul>
                        </div>
                        <div className="form-input col-md-4 offset-md-1 mb-3 d-flex justify-content-center align-items-center">
                            <form>
                                <h5>{t("footer.2")}</h5>
                                <div className="d-flex justify-content-center align-items-center flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">{t('footer.3')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="company d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer