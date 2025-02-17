import Link from "next/link"
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {

   const date = new Date().getFullYear()

   return (
      <div className='bg-slate-900 text-slate-50 py-12 w-full'>
         <p className="px-4 max-w-[1024px] mx-auto">
            88Visuals is a professional photographer based
            in Lagos whose style is candid and inspiring,
            with a touch of cinematic flair. Experienced
            in intimate weddings, destination weddings,
            elopements, and more. He is available for
            world travel wherever you may need him.
         </p>

         <div className=" mt-8 flex items-center justify-between max-w-[1024px] mx-auto">
            <nav className="hidden sm:block ml-4">
               <ul className="space-y-2">
                  <li>
                     <Link href={'/about'}
                        className="hover:underline hover:opacity-80"
                     >About</Link>
                  </li>
                  <li>
                     <Link
                        href={'/recent-work'}
                        className="hover:underline hover:opacity-80"
                     >Recent Work</Link>
                  </li>
                  <li>
                     <Link
                        href={'/portfolio'}
                        className="hover:underline hover:opacity-80"
                     >Portfolio</Link>
                  </li>
                  <li>
                     <Link
                        href={'/offerings'}
                        className="hover:underline hover:opacity-80"
                     >Offerings</Link>
                  </li>
                  <li>
                     <Link
                        href={'/client-gallery'}
                        className="hover:underline hover:opacity-80"
                     >Client Gallery</Link>
                  </li>
                  <li>
                     <Link
                        className="hover:underline hover:opacity-80"
                        href={'/contact'}
                     >Contact</Link>
                  </li>
                  <li>
                     <Link
                        className="hover:underline hover:opacity-80"
                        href={'/login'}
                     >Log In</Link>
                  </li>
               </ul>
            </nav>

            <div>
               <p className="text-sm px-4">
                  &copy; {date} 88Visuals
               </p>
               <p className="text-sm flex items-center px-4">
                  Created by
                  <a
                     href="https://oscar-next-portfolio.vercel.app/"
                     target="_blank"
                     className="text-blue-500 mx-1 hover:underline"
                  >
                     Oscar4dev
                  </a>
                  and powered by
                  <a
                     href="https://nextjs.org/"
                     target="_blank"
                     className="text-lg mx-1"
                  >
                     <RiNextjsFill />
                  </a>
               </p>
            </div>
         </div>

      </div>
   )
}
