import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import Navbar               from '../components/navbar/index';
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
          text
        </div>
      <Contact/>
      </div>
    </div>
  ) 
}