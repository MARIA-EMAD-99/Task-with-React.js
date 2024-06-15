import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cartcontext'; 
import style from './price.module.css';
import { BallTriangle } from 'react-loader-spinner';

function ProductsByPrice() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setFilterProducts(res.data.products); 
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
      });
  }, []);

 

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`${product.title} added to cart`);
  };

  const handlePriceFilterChange = (minPrice, maxPrice) => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilterProducts(filtered);
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;

    switch (value) {
      case '1-20':
        handlePriceFilterChange(1, 20);
        break;
      case '30-50':
        handlePriceFilterChange(30, 50);
        break;
      case '60-80':
        handlePriceFilterChange(60, 80);
        break;
      case '90-300':
        handlePriceFilterChange(90, 300);
        break;
      default:
        setFilterProducts(products);
    }
  };

  return (
    <div className="container mb-5">
      <h1 className='my-5'> Products</h1>
      
      <div className="filter-section mb-5">
        <div className="input-group">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="radio"
              name="priceRange"
              value="1-20"
              onChange={handleRadioChange}
              aria-label="Radio button for following text input"
            />
          </div>
          <p>$1:$20</p>
        </div>
        <div className="input-group">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="radio"
              name="priceRange"
              value="30-50"
              onChange={handleRadioChange}
              aria-label="Radio button for following text input"
            />
          </div>
          <p>$30:$50</p>
        </div>
        <div className="input-group">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="radio"
              name="priceRange"
              value="60-80"
              onChange={handleRadioChange}
              aria-label="Radio button for following text input"
            />
          </div>
          <p>$60:$80</p>
        </div>
        <div className="input-group">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="radio"
              name="priceRange"
              value="90-300"
              onChange={handleRadioChange}
              aria-label="Radio button for following text input"
            />
          </div>
          <p>$90:$300</p>
        </div>
      </div>

      {filterProducts.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filterProducts.map((product) => (
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
                  <i className={`fa-regular fa-eye ${style.icondetails}`}  />
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

export default ProductsByPrice;
