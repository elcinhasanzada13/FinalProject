import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useAppContext } from '../../context/appContext';
import Banner from './Banner'
import emptywishlist from '../../assets/img/emptyfav.png'

const Wishlist = () => {
  const { addItem } = useCart();
  const { t } = useTranslation();
  const { wishlist, addToWishlist, removeFromWishlist } = useAppContext();
  console.log('wishlist are', wishlist);
  const wishlistChecker = (id) => {
    const boolean = wishlist.some((item) => item.id === id);
    return boolean;
  }
  return (
    <>
      <Banner title={t('wishlist.3')} />

      <Container className='my-5'>
        <Row className='gap-5 ms-5'>
        {wishlist.length > 0 ? wishlist.map((item) => {
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
        }) : 
        <div className='text-center'>
          <img width={300} src={emptywishlist} alt='wishlist'/>
          <h1>{t('wishlist.4')}</h1>
        </div>
        }
        </Row>
      </Container>
    </>
  )
}

export default Wishlist