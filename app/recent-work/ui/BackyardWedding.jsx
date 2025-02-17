import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export default function BackyardWedding() {
   return (
      <div className='mt-12 sm:mr-4 sm:mt-12 sm:flex sm:items-center sm:justify-between'>
         <div className="w-full h-[400px] relative sm:h-[450px] sm:w-1/2 sm:ml-4">
            <Image
               src={'/event403.jpg'}
               alt="placeholder Image"
               fill
               className="object-cover"
               sizes='50vh'
               priority
            />
         </div>

         <div className='sm:w-[45%]'>
            <h2 className={`${playfair.className} mx-4 text-2xl mt-8`}>
               Backyard Micro Wedding
            </h2>
            <p className='mt-8 mx-4'>
               Beneath the towering pines and granite peaks
               of the Sierra Nevada, Emily and Ben
               exchanged vows in a secluded alpine meadow.
               Their elopement was a testament to their
               adventurous spirits, a celebration of love
               amidst the raw beauty of nature. With only the
               whispering wind and the soaring eagles as
               witnesses, they promised forever, their love
               echoing through the majestic wilderness that
               served as their breathtaking chapel.
               It was an intimate and unforgettable
               beginning to their journey together.
            </p>
            <p className='px-4 my-8'>
               <Link
                  href={'/recent-work/backyard-wedding'}
                  className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
               >
                  See Album
               </Link>
            </p>
         </div>
      </div>
   )
}
