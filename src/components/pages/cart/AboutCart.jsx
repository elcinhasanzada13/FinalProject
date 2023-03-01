import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import empty from '../../assets/img/emptycart.png'

const AboutCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getName = localStorage.getItem('nameData');
  const getPass = localStorage.getItem('passData');
  const aa = () => {
    if (getName === null && getPass === null) {
      navigate('/login')
    } else (
      navigate('/checkout')
    )
  }
  const { items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    totalItems
  } = useCart();
  if (isEmpty) return (
    <>
    <div className="d-flex align-items center justify-content-center">
    <img width={400} src={empty} alt="" />
  </div>
    <div className="d-flex align-items center justify-content-center">
    <Link to='/products' className='btn btn-primary'>{t('cart.10')}</Link>
  </div>
    
    </>
  )
  return (
    <>
      <div className="card-a my-5">
        <div className="row abc">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>{t('cart.2')}</b></h4></div>
                <div className="col align-self-center text-right text-muted">{totalItems} {t('cart.3')}</div>
              </div>
            </div>

            {items.map((item, i) => {
              return (
                <div key={i} className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2"><img className="img-flui" src={item.img} alt={item.name} /></div>
                    <div className="col">
                      <div className="row text-muted">{item.title}</div>
                      <div className="row">{item.name}</div>
                    </div>
                    <div className="col">
                      <button className="btn btn-danger btn-sm" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className="mx-3">{item.quantity}</span>
                      <button className="btn btn-primary btn-sm" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="col">{(item.price * item.quantity)}$ <button className="close btn" onClick={() => removeItem(item.id)}>✕</button></div>
                  </div>
                </div>
              )
            })}





            <div className="back-to-shop"><Link to='/products'>←</Link><span className="text-muted">{t('cart.5')}</span></div>
          </div>
          <div className="col-md-4 summary">
            <div><h5><b>{t('cart.4')}</b></h5></div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>{t('cart.6')}({totalItems})</div>
              <div className="col text-right">$ {cartTotal}</div>
            </div>
            <form>
              <p>{t('cart.7')}</p>
              <select><option className="text-muted">Standard - $5.00</option></select>
            </form>
            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
              <div className="col">{t('cart.8')}</div>
              <div className="col text-right">$ {cartTotal + 5}</div>
            </div>
            <button onClick={aa} className="btn btn-1">{t('cart.9')}</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutCart;