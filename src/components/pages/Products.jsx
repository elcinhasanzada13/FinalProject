import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import dataproducts from '../data/dataproducts'
import Banner from './common/Banner'
import SingleCard from './common/SingleCard'


const Products = () => {
  const [search, setSearch] = useState('')
  const {t} = useTranslation()
  return (
   <>
   <Banner title={t('navbar.4')}/>
   
    <div className="products container">
      <form className='text-center container col-4'>
        <div className="input-group mb-3 mt-5 products-search">
          <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search Products..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        </div>
      </form>

      <Container className='ms-3'>
      <Row className='gap-5 mt-5'>
        {dataproducts.filter((item) => {
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
        }).map((item) => {
          return (
            <SingleCard dataproducts={item} photo={item.img} name={item.name} price={item.price} desc={item.desc} title={item.title} key={item.id} id={item.id} />
          )
        })}
      </Row>
      </Container>
    </div>
   </>

  )
}

export default Products