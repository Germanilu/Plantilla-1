import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import Navbar               from '../components/navbar/index';
import Map               from '../components/google-map-location/index';
import { FaFacebookF, FaTwitter,FaInstagram }   from "react-icons/fa";
import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design">
      <Navbar home={false}/>
      <div className="contact-first-box"></div>
      <div className="contact-img"></div>
      <div className="contact-box">
        <div className="information-contact-box">
          <span className="contact-main-title">We would love to hear from you</span>
          <div className="phone-email">
            <span>Tel: 666666666</span>
            <span>info@mysite.com</span>
          </div>
          <div className="street">
          <span className="text">{t('third-paragraph')}</span>
          <span className="text">{t('fourth-paragraph')}</span>
        </div>
        <div className="icons">
            <FaTwitter size={17}/>
            <FaFacebookF size={17}/>
            <FaInstagram size={17}/>
        </div>
      </div>
      <Contact/>
      </div>
      <div className="google-maps-container">
        <Map/>
      </div>
    </div>
  ) 
}