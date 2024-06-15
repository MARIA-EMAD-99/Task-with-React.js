import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './details.module.css'
import { CartContext } from '../../context/cartcontext'
import { BallTriangle } from 'react-loader-spinner'

function Details() {
  const { id } = useParams()
  const [detailsprd, setDetailPrd] = useState(null)
  const [error, setError] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setDetailPrd(res.data)
      })
      .catch((err) => {
        setError('Failed to fetch product details')
        console.error(err)
      })
  }, [id])

  const handleAddToCart = (product) => {
    addToCart(product)
    // Optionally provide feedback to the user that the item has been added to the cart
    // console.log(`${product.title} added to cart`);
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!detailsprd) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    )
  }

  return (
    <div className={style.parentdiv}>
      <div className={style.childone}>
        <img src={detailsprd.thumbnail} className="w-100 " alt={detailsprd.title} />
      </div>
      <div className={style.childttwo}>
        <h1>Name: {detailsprd.title}</h1>
        <p>Description: {detailsprd.description}</p>
        <p>Price: ${detailsprd.price}</p>
        <p>Category: {detailsprd.category.name}</p>
        <hr />
        <div className='d-flex justify-content-center'>
          <button
            onClick={() => handleAddToCart(detailsprd)}
            className={`btn btn-dark w-100`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
