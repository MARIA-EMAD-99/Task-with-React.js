import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { CartContext } from '../../context/cartcontext'; // Adjust the path as per your project structure
import style from './products.module.css';
import { BallTriangle } from 'react-loader-spinner';

function Products() {
  const [products, setProducts] = useState([]);
 
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
      });
  }, []);



  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function from CartContext
    console.log(`${product.title} added to cart`);
  };

  return (
    <div className="container mb-5">
      <h1 className='my-5'> Products</h1>
      {products.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div
              
                className={`card ${style.noborder}`}
              >
                <div className="position-relative">
                  <Link to={`/details/${product.id}`}>
                  <img 
                    src={product.thumbnail} 
                    className="card-img-top img-fluid" 
                    alt={product.title} 
                  />
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`btn btn-dark w-100 `}
                  >
                    Add to cart
                  </button>
                  <Link to={`/details/${product.id}`}>
                    <i className={`fa-regular fa-eye ${style.icondetails}`} />
                  </Link>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        //loader spinner
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default Products;
