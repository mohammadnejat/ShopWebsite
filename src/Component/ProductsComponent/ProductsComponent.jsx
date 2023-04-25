import React from 'react'
import "./ProductsComponent.css"
import { Products } from '../../dataBase'
import { Link } from 'react-router-dom'

const ProductsComponent = () => {
    return (
        <>
            {
                Products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="card-products">
                        <div className='card-image'>
                            <img src={product.img} alt="#" />
                        </div>
                        <div>
                            <span>گوشی موبایل  اپل مدل iphone 13</span>
                            <p>تنها 4 عدد در انبار
                            </p>
                        </div>
                        <small>{product.price}</small>
                        <small>تومان</small>
                    </div>
                    </Link>
                ))
            }

        </>

    )
}

export default ProductsComponent