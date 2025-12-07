import "@/app/components/footer/styles.css";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="top">
        <div className="top-left">
          <div className="instruction">
            <div className="signIN">BE THE FIRST TO KNOW</div>
            <div>Sign up for updates from metta muse</div>
          </div>
          <div className="subscribe">
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="top-right">
          <div className="contact">
            <div className="title">CONTACT US</div>
            <div className="contact-info">
              <div className="text-one">+44 221 133 5360</div>
              <div className="text-one">customercare@mettamuse.com</div>
            </div>
          </div>

          <div className="currency">
            <div className="title">CURRENCY</div>
            <div className="currency-info">
              <div className="text-one">flag USA</div>
              <div className="text-two">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="bottom">
        <div className="bottom-left">
          <div className="header">mettā muse</div>
          <div className="text">
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
        </div>
        <div className="bottom-center">
          <div className="header">QUICK LINKS</div>
          <div className="text">
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="bottom-right">
          <div className="follow">
            <div className="title">FOLLOW US</div>
            <div className="social-media">
              <FaLinkedin /> <FaInstagram />
            </div>
          </div>
          <div className="payment">
            <div className="title">mettā muse Accepts</div>
            <Image src="/payment.png" width={376} alt="payment" height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
