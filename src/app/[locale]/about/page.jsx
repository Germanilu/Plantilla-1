'use client';

import { useTranslations }  from "next-intl";
import Navbar               from '../components/navbar/index';

import style from './page.module.scss'
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
      <div className={style.containerImages}>
      <div className={style.imgBackgroundSmall}></div>
      <div className={style.imgBackgroundSmall2}></div>
      </div>
    </div>
  ) 
}