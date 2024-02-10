'use client'
import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import Image from 'next/image'
import hero from '../../../public/media/fondooriginal.jpg'
import Navbar                                from './components/navbar/index';
import './page.scss';



export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <Navbar home={true}/>
      <div className="img">
        <Image src={hero} className="img"/>
      </div>
    </div>
  )
}