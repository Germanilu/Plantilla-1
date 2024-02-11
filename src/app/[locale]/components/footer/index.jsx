import { useTranslations }                      from "next-intl";
import { FaFacebookF, FaTwitter,FaInstagram }   from "react-icons/fa";
import './index.scss'

export default function Footer(){

  const t = useTranslations("Footer");

  const year = () => {
    const today = new Date();
    return today.getFullYear()
  }

  return (
    <div className="footer-design">
      <div className="containers-details">
          <div className="info">
            <span className="text">{t('first-paragraph')}</span>
            <span className="text">{t('second-paragraph')}</span>
          </div>
          <div className="info">
            <span className="text">{t('third-paragraph')}</span>
            <span className="text">{t('fourth-paragraph')}</span>
          </div>
          <div className="info">
            <span className="text">{t('follow-us')}</span>
            <div className="icons">
            <FaTwitter size={25}/>
            <FaFacebookF size={25}/>
            <FaInstagram size={25}/>
            </div>
          </div>
      </div>
      <div className="design-firm"> {t('register-simbol')} {year()} {t('register-text')}</div>
    </div>
  ) 
}



