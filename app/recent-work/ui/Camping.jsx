import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export default function Camping() {
   return (
      <div className='sm:flex sm:flex-row-reverse sm:items-center sm:justify-between'>
         <div className="w-full h-[400px] relative mt-12 sm:w-1/2 sm:mr-4">
            <Image
               src={'/event303.jpg'}
               alt="placeholder Image"
               fill
               priority
               className="object-cover"
               sizes='50vh'
            />
         </div>

         <div className='sm:w-[45%]'>
            <h2 className={`${playfair.className} mx-4 text-2xl mt-8`}>
               Intimate Wedding and Camping
            </h2>
            <p className='mx-4 mt-8'>
               The sun dipped below the horizon,
               painting the lake in hues of rose and
               gold as Sarah and James exchanged vows.
               Candlelight flickered on tables adorned
               with lace and delicate blooms, casting
               a warm glow over the joyous celebration.
               Laughter and music filled the air as the
               newlyweds shared their first dance, the
               tranquil lake reflecting their love and
               the promise of a beautiful future
               together. It was a scene straight out
               of a dream, a perfectly romantic lakeside
               wedding.
            </p>
            <p className='mt-8 mx-4'>
               <Link
                  href={'/recent-work/camping'}
                  className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
               >
                  See Album
               </Link>
            </p>
         </div>
      </div>
   )
}
