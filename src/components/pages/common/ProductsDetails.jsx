import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import dataproducts from '../../data/dataproducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const {addItem} = useCart();
  const notify = () => toast("Add to card!");

  const detailItems = dataproducts.find(p => p.id == id);
  return (
    <>
      <div className="px-4 my-5 text-center">
        <div className="image-bg">
          <img className="d-block mx-auto" src={detailItems.img} alt={detailItems.name} width={350} />
        </div>
        <h1 className="display-5 fw-bold">{detailItems.name}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{detailItems.desc}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to='/products'><button className="btn btn-outline-primary btn-lg px-4 gap-3">{t('products.3')}</button></Link>
            <button onClick={()=>{notify(addItem(detailItems))}} className="btn btn-warning btn-lg px-4 text-light">{t('products.1')}</button>
            <ToastContainer position="bottom-right"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="dark"/>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductsDetails