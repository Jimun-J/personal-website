import React from 'react'
import './Products.css'
import Product from '../Product/Product'
import { products } from "../../data"

const Products = () => {
  return (
    <div className="Products" id="Products">
        <div className="p-text">
          <h1 className="p-title">Create & Inspire</h1>
          <p className="p-desc">
            The projects are creatively done using React. 
            Weather Forecasts, Exercises for specific target muscles, and other stunning portfolios awaits inside.
          </p>
        </div>
        <div className="p-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
    </div>
  )
}

export default Products