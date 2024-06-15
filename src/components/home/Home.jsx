import React from 'react';
import Products from '../products/Products';
import style from './home.module.css'; // Make sure to import the CSS file

function Home() {
  return (
    <div >
      <div className={`w-100 my-5   position-relative ${style.backgroundimage}`}>
        <div className={style.textoverlay}>
          <h1>Online Shoping</h1>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores facere inventore officia error in accusamus ratione, tempora, perferendis hic magnam quos, ut eaque magni alias velit soluta adipisci nesciunt?</p>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;



