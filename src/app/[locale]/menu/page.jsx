'use client'
import Navbar                                from '../components/navbar/index';
import Image from 'next/image'
import hero from '../../../../public/media/fondooriginal.jpg'
import './page.scss';

export default function Menu(){
  return (
    <div className="menu-design">
      <Navbar home={false}/>
      {/* <div className="img">
        <Image src={hero} className="img"/>
        <div className="prueba"></div>
      </div> */}
    </div>
  ) 
}