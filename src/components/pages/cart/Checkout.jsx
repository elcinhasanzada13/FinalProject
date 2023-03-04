import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2'
import checkout from '../../assets/img/cart/checkout.png'

const Checkout = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const alert =()=>{
    if (totalItems > 0) {
      Swal.fire({
        icon: 'success',
        title: t('checkout.23'),
        showConfirmButton: false,
        timer: 2500
      })
      navigate('/products');
      emptyCart();
    }
  }

  const {items,
    totalItems,
    cartTotal,
    emptyCart
  } = useCart();
  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src={checkout} alt='err' width={360} />
            <h2>{t('checkout.1')}</h2>
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">{t('checkout.2')}</span>
                <span className="badge bg-primary rounded-pill">{totalItems}</span>
              </h4>
              <ul className="list-group mb-3">
                {items.map((item,i) => {
                  return (
                    <li key={i} className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-muted">{item.title}</small>
                      </div>
                      <span className="text-muted">${(item.price * item.quantity)}</span>
                    </li>
                  )
                })}
                <li className="list-group-item d-flex justify-content-between">
                  <span>{t('checkout.3')}</span>
                  <small className='text-muted'>$5</small>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>{t('checkout.4')}(USD)</span>
                  <strong>${cartTotal+5}</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3 liststyle">{t('checkout.5')}</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label liststyle">{t('checkout.6')}</label>
                    <input type="text" className="form-control" id="firstName" required placeholder={t('checkout.6')} />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label liststyle">{t('checkout.7')}</label>
                    <input type="text" className="form-control" id="lastName" required placeholder={t('checkout.7')} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label liststyle">Email</label>
                    <input type="email" className="form-control" id="email" required placeholder="you@example.com" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label liststyle">{t('checkout.8')}</label>
                    <input type="text" className="form-control" id="address"  required placeholder="1234 Main St" />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label liststyle">{t('checkout.9')} </label>
                    <select className="form-select" id="country" required>
                      <option value>{t('checkout.10')}...</option>
                      <option>{t('checkout.11')}</option>
                      <option>{t('checkout.12')}</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label liststyle">{t('checkout.24')}</label>
                    <select className="form-select" id="state" required>
                      <option value>{t('checkout.10')}...</option>
                      <option>{t('checkout.13')}</option>
                      <option>{t('checkout.14')}</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label liststyle">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder aria-required />
                  </div>
                </div>
                <hr className="my-4 liststyle" />
                <div className="form-check">
                  <input type="checkbox" className="form-check-input " id="save-info" />
                  <label className="form-check-label liststyle" htmlFor="save-info">{t('checkout.15')}</label>
                </div>
                <hr className="my-4 liststyle" />
                <h4 className="mb-3 liststyle">{t('checkout.16')}</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input " defaultChecked required />
                    <label className="form-check-label liststyle" htmlFor="credit">{t('checkout.17')}</label>
                  </div>
                  <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label liststyle" htmlFor="debit">{t('checkout.18')}</label>
                  </div>
                  <div className="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                    <label className="form-check-label liststyle" htmlFor="paypal">PayPal</label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label liststyle">{t('checkout.19')}</label>
                    <input type="text" className="form-control" id="cc-name" placeholder required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label liststyle">{t('checkout.20')}</label>
                    <input type="text" className="form-control" id="cc-number" placeholder required />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label liststyle">{t('checkout.21')}</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder required />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label liststyle">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder required />
                  </div>
                </div>
                <hr className="my-4" />
                <button onClick={alert} className="w-100 btn btn-primary btn-lg" type="submit">{t('checkout.22')}</button>
              </form>
            </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default Checkout