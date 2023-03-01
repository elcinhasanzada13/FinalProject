import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/a.png'
import Lang from './Lang'
import Mode from './Mode'
import { useAppContext } from '../../context/appContext';

const Navbar = () => {
    const {wishlist} = useAppContext();
    const [mode, setMode] = useState(localStorage.getItem('mode'));
    useEffect(() => {
        document.body.className = mode;
    }, [mode])

    const { t } = useTranslation()
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        localStorage.clear();
        navigate('/login')
    };
    const getName = localStorage.getItem('nameData');
    const getPass = localStorage.getItem('passData');
    const authButton = () => {
        if (getName === null && getPass === null) {
            return (
                <>
                    <Link id='login' to='/login'><i className="fa-solid fa-user me-4"></i></Link>
                </>
            )
        } else {
            return (
                <>
                    <div className="dropdown">
                        <button
                            class="btn btn-secondary dropdown-toggle me-3"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {getName}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <Link className="dropdown-item d-flex" to="/wishlist">
                                <i class="fa-solid fa-heart"></i> {t('wishlist.3')}
                                <div className="span">
                                    <span className='span-wish'>{wishlist.length}</span>
                                </div>
                            </Link>
                            <a className="dropdown-item" href="#!" onClick={handleLogoutClick}>
                                <i class="fa-solid fa-arrow-right-from-bracket"></i> {t('login.6')}
                            </a>
                        </div>
                    </div>
                </>

            )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink to="/"><img className='logos' src={logo} alt="logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id='list'>
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className='link' to='/'>{t('navbar.1')}</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className='link' to='/about'>{t('navbar.2')}</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className='link' to='/blog'>{t('navbar.3')}</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className='link' to='/products'>{t('navbar.4')}</NavLink>
                        </li>
                        <li className="nav-item ms-3">
                            <NavLink className='link' to='/contact'>{t('navbar.5')}</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex pages" >
                        <Link id='search' to='/products'><i className="fa-solid fa-magnifying-glass"></i></Link>
                        {authButton()}
                    </div>
                    <div className="d-flex lang">
                        <Lang />
                        <Mode modedata={mode} setModedata={setMode} />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar