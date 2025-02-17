'use client'

import Link from "next/link";
import Logo from "./Logo";
import { RxAvatar } from "react-icons/rx";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SlOptionsVertical } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import useOutsideClick from "../hook/useOutsideClick";

export default function Header() {

   const [isOpen, setIsOpen] = useState(false)
   const [isOpenOptions, setIsOpenOptions] = useState(false)

   const pathname = usePathname()
   const clickRef = useRef(null)

   useOutsideClick(clickRef, () => setIsOpen(false))
   useOutsideClick(clickRef, () => setIsOpenOptions(false))

   function handleToggle() {
      setIsOpen((prevState) => !prevState)
   }

   function handleToggleOptions() {
      setIsOpenOptions((cur) => !cur)
   }

   return (
      <>
         <nav className="bg-slate-900 text-slate-50 h-16 px-4">
            <ul className="flex gap-4 h-full items-center justify-between">
               <Link href={'/'} className="h-full hover:bg-slate-700 px-2 flex items-center justify-center duration-300 ease-in-out">
                  <Logo />
               </Link>

               <div className="h-full hidden md:flex">
                  <li className="h-full flex items-center justify-center">
                     <Link
                        href={'/about'}
                        className={`${pathname === '/about' ? 'bg-slate-700' : ''} h-full flex items-center hover:bg-slate-700 px-4 duration-300 ease-in-out`}
                     >About
                     </Link>
                  </li>
                  <li className="h-full flex items-center justify-center">
                     <Link
                        href={'/recent-work'}
                        className={`${pathname === '/recent-work' ? 'bg-slate-700' : ''} h-full flex items-center hover:bg-slate-700 px-4 duration-300 ease-in-out`}
                     >Recent Work
                     </Link>
                  </li>
                  <li className="h-full flex items-center justify-center">
                     <Link
                        href={'/offerings'}
                        className={`${pathname === '/offerings' ? 'bg-slate-700' : ''} h-full flex items-center hover:bg-slate-700 px-4 duration-300 ease-in-out`}
                     >Offerings
                     </Link>
                  </li>
                  <li className="h-full flex items-center justify-center">
                     <Link
                        href={'/client-gallery'}
                        className={`${pathname === '/client-gallery' ? 'bg-slate-700' : ''} h-full flex items-center hover:bg-slate-700 px-4 duration-300 ease-in-out`}
                     >Client Gallery
                     </Link>
                  </li>
                  <li className="h-full flex items-center justify-center">
                     <Link
                        href={'/contact'}
                        className={`${pathname === '/contact' ? 'bg-slate-700' : ''} h-full flex items-center hover:bg-slate-700 px-4 duration-300 ease-in-out`}
                     >Contact
                     </Link>
                  </li>
                  <button
                     onClick={ setIsOpenOptions }
                  >
                     <SlOptionsVertical />
                  </button>
               </div>

               <button
                  className="text-lg border p-1 md:hidden"
                  onClick={ handleToggle }
               >
                  {
                     isOpen
                        ? <MdClose />
                        : <MdOutlineMenu />
                  }
               </button>
            </ul>
         </nav>

         {
            isOpenOptions
            && <nav
               className="fixed bg-slate-900 text-slate-50 w-[120px] right-0"
               ref={clickRef}
            >
               <ul className="space-y-4 py-4">
                  <li className="mx-4">
                     <Link
                        href={'/login'}
                        className="flex items-center gap-2"
                        onClick={handleToggleOptions}
                     >
                        <span><CiLogin /></span>
                        <span>Log in</span>
                     </Link>
                  </li>

                  <button
                     className="flex items-center gap-2 mx-4"
                  >
                     <span><MdOutlineDarkMode /></span>
                     <span>Theme</span>
                  </button>
               </ul>
            </nav>
         }

         {
            isOpen && <nav
               ref={clickRef}
               className="fixed text-slate-50 right-0 h-full w-1/2"
            >
               <ul className="bg-slate-700 h-full py-4 flex flex-col pb-16">
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/about'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4"
                     >
                        About
                     </Link>
                  </li>
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/recent-work'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4"
                     >
                        Recent Work
                     </Link>
                  </li>
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/offerings'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4"
                     >
                        Offerings
                     </Link>
                  </li>
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/client-gallery'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4"
                     >
                        Client Gallery
                     </Link>
                  </li>
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/contact'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4"
                     >
                        Contact
                     </Link>
                  </li>
                  <li className="h-10 hover:bg-slate-900">
                     <Link
                        href={'/login'}
                        onClick={handleToggle}
                        className="h-full flex items-center ml-4 gap-2"
                     >
                        <span className="text-lg">
                           <RxAvatar />
                        </span>
                        <span>
                           Log In
                        </span>
                     </Link>
                  </li>

                  <p className="mt-auto text-center">
                     88Visuals. &copy;
                  </p>
               </ul>
            </nav>
         }
      </>
   )
}
