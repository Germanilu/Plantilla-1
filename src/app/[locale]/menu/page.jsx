'use client';

import Navbar       from '../components/navbar/index';
import {get,map}        from 'lodash';
import {menu}       from '@/assets/menu/index';
import './page.scss';

export default function Menu(){
  return (
    <div className="menu-design">
      <Navbar home={false}/>
      <div className="menu-container">
        <div className="description">
          <span className='title'>Menu</span>
          <span className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officia exercitationem corporis nam quas sequi dolor consectetur optio harum doloribus!</span>
        </div>

        <div className="dishes-container">
          <span className='starters'>Starters</span>
          {
            map(menu.starters,(plate) => {
              return(
                <div className="box">
                  <span className="box-title">{get(plate,'title')}</span>
                  <span className="box-description">{get(plate,'description')}</span>
                  <span className="price">{get(plate,'price')}</span>
                </div>
                )
              })
            }
        </div>
        <div className="dishes-container last">
          <span className='starters'>Main Courses</span>
          {
            map(menu.main,(plate) => {
              return(
                <div className="box">
                  <span className="box-title">{get(plate,'title')}</span>
                  <span className="box-description">{get(plate,'description')}</span>
                  <span className="price">{get(plate,'price')}</span>
                </div>
                )
              })
            }
        </div>
      </div>
    </div>
  ) 
}