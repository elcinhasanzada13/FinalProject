import React from 'react'
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart'
import empty from '../../assets/img/emptycart.png'
const CartAbout = () => {
    const {t} = useTranslation();
    const { items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        isEmpty,
        emptyCart
    } = useCart();
    if (isEmpty) return <div className="d-flex align-items center justify-content-center">
  <img width={500} src={empty} alt="" />
  </div>
    return (
        <>
            <Container className='my-5 total'>
                <button className='btn btn-success my-5 text-light'  onClick={()=>{emptyCart()}}>{t('cart.2')}</button>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">{t('cart.3')}</th>
                            <th scope="col">{t('cart.4')}</th>
                            <th scope="col">{t('cart.5')}</th>
                            <th scope="col">{t('cart.6')}</th>
                            <th scope='col'>{t('cart.7')}</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {items.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td><img width={50} src={item.img} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{(item.price * item.quantity)}$</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className='mx-3'>{item.quantity}</span>
                                        <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash"></i></button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                <div className="totalprice py-3 d-flex justify-content-between">
                <h1>{t('cart.8')}: {cartTotal}$</h1>
                <button className='btn btn-primary'>{t('cart.9')}</button>
                </div>
            </Container>
        </>
    )
}

export default CartAbout