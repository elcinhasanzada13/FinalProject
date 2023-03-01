import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import dataproducts from '../data/dataproducts'
import Banner from './common/Banner'
import { useAppContext } from '../context/appContext'



const Products = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useAppContext();
  console.log('wishlist are', wishlist);
  const wishlistChecker = (id) => {
    const boolean = wishlist.some((item) => item.id === id);
    return boolean;
  }

  const [search, setSearch] = useState('');
  const [data, setData] = useState(dataproducts);
  const { addItem } = useCart();
  const { t } = useTranslation();
  const filterResult = (catItem) => {
    const result = dataproducts.filter((curData) => {
      return curData.title === catItem
    });
    setData(result)
  }
  return (
    <>
      <Banner title={t('navbar.4')} />
      <div className="products container">
        <form className='text-center container col-4'>
          <div className="input-group mb-3 mt-5 products-search">
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder={t('products.8')} aria-label="Recipient's username" aria-describedby="button-addon2" />
          </div>
        </form>

        <Container className='ms-3'>
          <div className="button-product text-center py-3">
            <div className="btn btn-info me-3 mb-2 text-light button-type" onClick={() => setData(dataproducts)}>{t('products.4')}</div>
            <div className="btn btn-info me-3 mb-2 text-light button-type" onClick={() => filterResult('Men')}>{t('products.5')}</div>
            <div className="btn btn-info me-3 mb-2 text-light button-type" onClick={() => filterResult('Women')}>{t('products.6')}</div>
            <div className="btn btn-info me-4 mb-2 text-light button-type" onClick={() => filterResult('Kids')}>{t('products.7')}</div>
          </div>
          <Row className='gap-5 mt-5 mb-5'>
            {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((item) => {
              const { id, img, name, title, desc, price } = item;
              return (
                <div data-aos="flip-down" className="card-style">

                  <img src={img} className="card-img-top" alt={name} />
                  <div className="card-body">
                    <h5 className="card-title mt-2">{name} </h5>
                    <h6 className="card-title">{desc.substring(0, 50)}... </h6>
                    <p className="card-text for-title mt-2">{title}</p>
                    <h4 className="card-text">{price}$</h4>
                  </div>
                  <div className='buttons my-3'>
                    <button onClick={() => addItem(item)} className='btn btn-success' ><i class="fa-solid fa-cart-plus"></i> {t('products.1')}</button>
                    {wishlistChecker(item.id) ?
                      <button onClick={() => removeFromWishlist(item.id)} className='btn btn-danger mt-3' ><i class="fa-solid fa-heart-crack"></i> {t('wishlist.2')}</button> :
                      <button onClick={() => addToWishlist(item)} className='btn btn-danger mt-3' ><i class="fa-solid fa-heart"></i> {t('wishlist.1')}</button>
                    }
                    <Link to={`/products/${id}`}><button className='btn btn-secondary my-3'><i class="fa-solid fa-circle-info"></i> {t('products.2')}</button></Link>
                  </div>
                </div>
              )
            })}
          </Row>
        </Container>
      </div>
    </>

  )
}

export default Products