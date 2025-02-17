import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export default function BackyardWedding() {
   return (
      <div className='mt-8 sm:flex sm:justify-center sm:items-center sm:h-[400px] sm:flex-row-reverse'>
         <div className='w-full h-[250px] relative sm:w-[50%] sm:h-5/6'>
            <Image
               src={'/event404.jpg'}
               alt='placeholder photo'
               sizes="50vh"
               fill
               className='object-cover'
            />
         </div>

         <div className='sm:w-[45%]'>
            <div className='w-4/6 mx-auto aspect-video relative mt-8'>
               <Image
                  src={'/event405.jpg'}
                  alt=''
                  fill
                  sizes="50vh"
                  className='object-cover'
               />
            </div>
            <div className='mt-8 text-center'>
               <h3 className={`${playfair.className} text-xl`}>Backyard Wedding</h3>
               <p className='mt-4'>
                  <Link
                     href={'/recent-work/backyard-wedding'}
                     className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'                  >
                     See Album
                  </Link>
               </p>
            </div>
         </div>
      </div>
   )
}
