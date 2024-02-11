'use client'
import { useTranslations }  from "next-intl";
import Navbar               from './components/navbar/index';
import './page.scss';



export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <Navbar home={true}/>
    </div>
  )
}