// src/components/Footer.js
import React from 'react';
import style from './footer.module.css'; // Import CSS file for styling

const Footer = () => {
 
  const companyName = "Your Company Name";
  const currentDate = new Date().toDateString()

  return (
    <div className={`${style.footer}`}>
      {companyName} - {currentDate}
    </div>
  );
};

export default Footer;
