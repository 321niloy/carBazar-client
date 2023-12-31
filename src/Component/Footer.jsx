import React from 'react';
import onefotter from '../../public/image/cartwo.png'
import footers from '../../public/image/FOOTERS.svg'
const Footer = () => {
    return (
        <div>
          <img src={footers} alt="" />
           <footer className="footer p-10 bg-yellow-50 text-black font-bold rounded-t-lg">

  <div >
    <img className='w-28 shadow-yellow-300 shadow-xl' src={onefotter} alt="" />
    <p>CarBazars Car Showroom<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
 
</footer> 
        </div>
    );
};

export default Footer;