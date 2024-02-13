'use client';

import { useTranslations }  from "next-intl";
import Navbar               from '../components/navbar/index';
import style from './page.module.scss';
import ScrollToTop from '@/app/[locale]/components/scroll-to-top';
export default function About(){
  const t = useTranslations("About");
  return (
    <div className={style.aboutDesign}>
      <Navbar home={false}/>
      <div className={style.ourStory}>
        <div className={style.title}>Our story</div>
        <div className={style.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores accusamus voluptatum, fuga voluptate minus dolorem voluptas cupiditate atque sequi. Quisquam, itaque! Aperiam iste doloremque quam dicta doloribus ipsa ea!
        </div>
      </div>
      <div className={style.imgBackgroundBig}></div>
      <div className={style.ourStory}>
        <div className={style.title}>In the Kitchen</div>
        <div className={style.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores accusamus voluptatum, fuga voluptate minus dolorem voluptas cupiditate atque sequi. Quisquam, itaque! Aperiam iste doloremque quam dicta doloribus ipsa ea!
        </div>
      </div>
      <div className={style.container}>
      <div className={style.imgBackgroundSmall}></div>
      <div className={style.imgBackgroundSmall1}></div>
      </div>
      <ScrollToTop/>
      </div>

  ) 
}