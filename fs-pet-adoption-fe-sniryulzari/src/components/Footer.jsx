import React from "react";
import logo from "../Images/logo.jpg";
import { GrTwitter } from "react-icons/gr";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-social-media">
          <div className="footer-social-media-top">
            <img src={logo} className="footer-logo" />
            <span className="social-media-header">Ado-Pet</span>
          </div>
          <p className="footer-social-media-text">
            Lorem ipsum dolor sit amet, elit. Aenean ligula eget dolor.
          </p>
          <div className="footer-social-media-links">
            <GrTwitter size="2em" className="twitter-link" />
            <RiFacebookFill size="2em" className="facebook-link" />
            <AiOutlineInstagram size="2em" className="instagram-link" />
            <GrYoutube size="2em" className="youTube-link" />
          </div>
        </div>

        <div className="footer-contact-us">
          <h2 className="contact-us-header">Contact Us</h2>
          <div className="contact-us-info-container">
            <div className="contact-us-contact">
              <span className="contact-us-logo">
                <FaPhoneAlt size="1.1em" />
              </span>
              <span className="contact-us-info">(+972)3-1234-567</span>
            </div>
            <div className="contact-us-contact">
              <span className="contact-us-logo">
                <HiOutlineMail size="1.3em" />
              </span>
              <span className="contact-us-info">Ado-Pet@PetLover.com</span>
            </div>
            <div className="contact-us-contact">
              <span className="contact-us-logo">
                <MdLocationOn size="1.3em" />
              </span>
              <span className="contact-us-info">
                Daniel Frisch St. 3, Tel Aviv-Yafo
              </span>
            </div>
          </div>
        </div>

        <div className="footer-working-hours">
          <h2 className="working-hours-header">Working Hours</h2>
          <span className="working-hours-text">Monday to Friday</span>
          <span className="working-hours-text">Open from 9am – 6pm</span>
          <span className="working-hours-text">Holidays/Weekends – Closed</span>
        </div>

        <div className="footer-newsletter">
          <h2 className="newsletter-header">Newsletter</h2>
          <input
            className="newsletter-input"
            placeholder="Your Email..."
          ></input>
          <button className="newsletter-button">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="footer-bottom-breaking-line"></hr>
        <div className="footer-bottom-copyright">
            <span className="footer-copyright-text">Copyright © 2023 Ado-Pet LTD. All rights reserved.</span>
            <span className="footer-copyright-text terms-of-use">Terms of Use</span>
            <span className="footer-copyright-text privacy-policy">Privacy Policy</span>
            <span className="footer-copyright-text">Made by Snir Yulzari</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
