import React from 'react'
import './footer.css'
import logo from '../../assets/icons/logo-placeholder.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer__link-container">
          <ul className="footer__links">
            <h3>Help</h3>
            <li>FAQ</li>
            <li>Delivery Information</li>
            <li>Returns Policy</li>
            <li>Make Return</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="footer__link-container">
          <ul className="footer__links">
            <h3>Help</h3>
            <li>FAQ</li>
            <li>Delivery Information</li>
          </ul>
        </div>
        <div className="footer__link-container">
          <ul className="footer__links">
            <h3>Pages</h3>
            <li>FAQ</li>
            <li>Delivery Information</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <img src={logo} alt="company logo" />
      </div>
    </div>
  )
}

export default Footer
