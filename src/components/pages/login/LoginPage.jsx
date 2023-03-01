import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import loginphoto from '../../assets/img/login/loginphoto.png'

const LoginPage = ({user,setUser}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const name = useRef();
    const pass = useRef();

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(
            name.current.value === "Elçin" && pass.current.value === "elcin123"
        ){
            localStorage.setItem("nameData","Elçin");
            localStorage.setItem("passData","elcin123");
            navigate ("/");
        }else{
            alert ('Please fill all the places')
        }
    }
    return (
        <>
            <section className="vh-50 my-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={loginphoto} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label className="form-label liststyle" htmlFor="form3Example3">{t('login.2')}</label>
                                    <input ref={name} type="text" id="form3Example3" className="form-control form-control-lg" placeholder={t('login.3')} />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label liststyle" htmlFor="form3Example4">{t('login.4')}</label>
                                    <input ref={pass} type="password" id="form3Example4" className="form-control form-control-lg" placeholder={t('login.5')} />
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg login-button">{t('login.1')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginPage