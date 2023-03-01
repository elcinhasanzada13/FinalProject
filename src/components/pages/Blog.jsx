import React from 'react'
import { useTranslation } from 'react-i18next';
import blogData from '../data/blogData';
import Banner from './common/Banner';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner title={t('navbar.3')} />

      <div className="container my-5">
        <div className="row gap-5">
          {blogData.map((data) => {
            return (
              <div key={data.id} className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                  <div className="col-md-4 mt-4">
                    <img src={data.image} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Blog