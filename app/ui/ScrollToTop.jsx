'use client'

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

   function handleScrollToTop() {
      window.scrollTo(
         { top: 0, behavior: 'smooth' }
      )
   }

   return (
      <button
         className="border border-slate-900 p-1.5 bg-sky-500 text-slate-50"
         onClick={ handleScrollToTop }
      >
         <FaArrowUp />
      </button>
   )
}
