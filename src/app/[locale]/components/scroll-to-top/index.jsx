'use client'

import { SlArrowUp } from "react-icons/sl";
import { useEffect, useState }  from "react";

import './index.scss';

/**
 * @component 
 * Scroll to top button, will appear when window scroll + 100px
 * 
 * @example
 * <ScrollToTop/>
 * 
 */
export default function ScrollToTop() {

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScrollToTopButton(true) : setScrollToTopButton(false)
    })
  },[])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {
        scrollToTopButton &&
        <div onClick={scrollUp} className="scroll-to-top"><SlArrowUp className="arrow-up" /></div>
      }
    </>
  )
}