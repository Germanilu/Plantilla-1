import { useTranslations }      from "next-intl";
import { FaFacebookF, FaTwitter,FaInstagram } from "react-icons/fa";
import './index.scss'

export default function Footer(){

  const t = useTranslations("Footer");

  return (
    <div className="footer-design">
      <div className="containers-details">
          <div className="info">
            <span>{t('first-paragraph')}</span>
            <span>{t('second-paragraph')}</span>
          </div>
          <div className="info">
            <span>{t('third-paragraph')}</span>
            <span>{t('fourth-paragraph')}</span>
          </div>
          <div className="info">
            <span>{t('follow-us')}</span>
            <div className="icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            </div>
          </div>
      </div>
    </div>
  ) 
}



