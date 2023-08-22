import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" >
      <Link to="#home" className="footer__button">
        <div className="">Back To Home</div>
      </Link>
      <div className="footer__container">
        <div className="footer__links">
          <ul>
            <li className="footer__link"><a href="/"><b>Get to Know Us</b></a></li>
            <li className="footer__link"><a href="/">Careers</a></li>
            <li className="footer__link"><a href="/">Amazon Newsletter</a></li>
            <li className="footer__link"><a href="/">About Amazon</a></li>
            <li className="footer__link"><a href="/">Accessibility</a></li>
            <li className="footer__link"><a href="/">Sustainability</a></li>
            <li className="footer__link"><a href="/">Press Center</a></li>
            <li className="footer__link"><a href="/">Investor Relations</a></li>
          </ul>
          <ul>
            <li className="footer__link"><a href="/"><b>Make Money with Us</b></a></li>
            <li className="footer__link"><a href="/">Sell more with Amazon</a></li>
            <li className="footer__link"><a href="/">Sell apps on Amazon</a></li>
            <li className="footer__link"><a href="/">Supply to Amazon</a></li>
            <li className="footer__link"><a href="/">Protect & Build Your Brand</a></li>
            <li className="footer__link"><a href="/">Become an Affiliate</a></li>
            <li className="footer__link"><a href="/">Become a Delivery Driver</a></li>
            <li className="footer__link"><a href="/">Start a Package Delivery Business</a></li>
            <li className="footer__link"><a href="/">Advertise Your Products›</a></li>
            <li className="footer__link"><a href="/">Self-Publish with Us</a></li>
          </ul>
          <ul>
            <li className="footer__link"><a href="/"><b>Amazon Payment Products</b></a></li>
            <li className="footer__link"><a href="/">Amazon Visa</a></li>
            <li className="footer__link"><a href="/">Amazon Store Card</a></li>
            <li className="footer__link"><a href="/">Amazon Secured Card</a></li>
            <li className="footer__link"><a href="/">Amazon Business Card</a></li>
            <li className="footer__link"><a href="/">Shop with Points</a></li>
            <li className="footer__link"><a href="/">Credit Card Marketplace</a></li>
            <li className="footer__link"><a href="/">Reload Your Balance</a></li>
            <li className="footer__link"><a href="/">Gift Cards</a></li>
          </ul>
          <ul>
            <li className="footer__link"><a href="/"><b>Let Us Help You</b></a></li>
            <li className="footer__link"><a href="/">Amazon and COVID-19</a></li>
            <li className="footer__link"><a href="/">Your Account</a></li>
            <li className="footer__link"><a href="/">Your Orders</a></li>
            <li className="footer__link"><a href="/">Shipping Rates & Policies</a></li>
            <li className="footer__link"><a href="/">Amazon Prime</a></li>
            <li className="footer__link"><a href="/">Returns & Replacements</a></li>
            <li className="footer__link"><a href="/">Manage Your Content and Devices</a></li>
            <li className="footer__link"><a href="/">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
