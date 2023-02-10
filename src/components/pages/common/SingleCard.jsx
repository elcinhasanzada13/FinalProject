import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart'

const SingleCard = ({ photo, name, desc, title, price, id, dataproducts }) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const notify = () => toast("Add to card!");

  return (
    <>
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="card-style">
        <img src={photo} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <h6 className="card-title">{desc.substring(0, 50)}... </h6>
          <p className="card-text">{title}</p>
          <h4 className="card-text">{price}$</h4>
        </div>
        <div className='buttons my-3'>
          <button onClick={() => { notify(addItem(dataproducts)) }} className='btn btn-success' >{t('products.1')}</button>
          <Link to={`/products/${id}`}><button className='btn btn-secondary my-3'>{t('products.2')}</button></Link>
        </div>
      </div>

    </>
  )
}

export default SingleCard