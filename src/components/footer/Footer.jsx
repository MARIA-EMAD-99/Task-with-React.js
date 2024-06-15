
import React from 'react';
import style from './footer.module.css'; 

const Footer = () => {
 
  const companyName = "Momentum Solutions";
  const currentDate = new Date().toDateString()

  return (
    <div className={`${style.footer}`}>
      {companyName} - {currentDate}
    </div>
  );
};

export default Footer;
