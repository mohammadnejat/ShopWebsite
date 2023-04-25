import React from 'react'
import ProductsComponent from '../../Component/ProductsComponent/ProductsComponent'
import Footer from '../../Component/Footer/Footer'
import TopButton from '../../Component/TopButton/TopButton'
import { Link } from 'react-router-dom'
import "./Products.css"
import Header from '../../Component/Header/Header'
const Products = () => {
  return (
    <>
      <Header />
      <div className='products'>
        <div className="listproducts">
          <Link className='link'><span style={{ fontSize: "20px", fontWeight: "600" }}>محبوب ترین </span></Link>
          <Link className='link'><span style={{ fontSize: "20px", fontWeight: "600" }}>جدیدترین </span></Link>
          <Link className='link'><span style={{ fontSize: "20px", fontWeight: "600" }}>گرانترین </span></Link>
          <Link className='link'><span style={{ fontSize: "20px", fontWeight: "600" }}>ارزانترین </span></Link>
        </div>
        <div className='products-items'>
          <ProductsComponent />
        </div>
      </div>
      <TopButton />
      <Footer />
    </>
  )
}

export default Products