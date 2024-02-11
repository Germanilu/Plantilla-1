'use client'

import {Link}               from '../../../../navigation';
import  LanguageSwitcher    from '../language-switcher';
import { useTranslations }  from "next-intl";
import { useSelector }      from 'react-redux';
import { useState }         from 'react';
import { IoMenu }           from "react-icons/io5";
import { RxCross2 }         from "react-icons/rx";

import './index.scss';

export default function Navbar({home}) {
  const t                       = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);
  
  return (
    <>
      {
        isMobile ?
        <div className='navbar'>
          <nav className="navbar-menu">
          <Link className="restaurant-name" href="/">{t('restaurant-name')}</Link>
            <div className='menu-action' >
              {openMenu ? <RxCross2 className='burger-menu-icon' onClick={() => setOpenMenu(!openMenu)} /> : <IoMenu className='burger-menu-icon' onClick={() => setOpenMenu(!openMenu)} />}
              {openMenu &&
                <ul className='mobile-navbar-box'>
                  <li className="list-item">
                    <Link className="item" href="/">{t('home')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/about" >{t('about-us')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/menu">{t('menu')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/contact-us">{t('contact-us')}</Link>
                  </li>
                  <li className="list-item">
                  <LanguageSwitcher className="language-switcher" />
                  </li>
                </ul>
              }
            </div>
          </nav>
          {
            home &&
            <div className="navbar-menu-welcoming">
              <span className='title'>{t('welcome')}</span>
              <span className='text'>{t('text-1')}</span>
              <div className="button">
                <Link className="item" href="/menu">{t('menu')}</Link>
              </div>
            </div>
          }
        </div>
          :
          <div className='navbar'>
          <nav className="navbar-menu">
            <Link className="restaurant-name" href="/">{t('restaurant-name')}</Link>
            <ul className="navbar-list">
              <li className="list-item">
                <Link className="item" href="/">{t('home')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/about" >{t('about-us')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/menu">{t('menu')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/contact-us">{t('contact-us')}</Link>
              </li>
              <LanguageSwitcher />
            </ul>
          </nav>
          {
            home &&
          <div className="navbar-menu-welcoming">
              <span className='title'>{t('welcome')}</span>
              <span className='text'>{t('text-1')}</span>
              <div className="button">
                <Link className="item" href="/menu">{t('menu')}</Link>
              </div>
          </div>
          }
          </div>
      }
    </>
  )
}