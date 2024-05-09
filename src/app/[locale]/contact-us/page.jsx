import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import Navbar               from '../components/navbar/index';
import Booking              from '../components/booking/index'
import Map                  from '../components/google-map-location/index';
import { FaFacebookF, FaTwitter,FaInstagram }   from "react-icons/fa";
import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design">
      <Navbar home={false}/>
      <div className="contact-first-box">
        <div className="booking-desc">
          <span className="booking-title">{t('reserve')}</span>
          <span className="booking-subtitle">{t('reserve-subtitle')}</span></div>
        <Booking/>
      </div>
      <div className="contact-img"></div>
      <div className="contact-box">
        <div className="information-contact-box">
          <span className="contact-main-title">{t('contact-main-title')}</span>
          <div className="phone-email">
            <span>{t('telef')}</span>
            <span>{t('mail')}</span>
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