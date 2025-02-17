import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ['latin']
})

export default function LakeSideWedding() {
   return (
      <div className='mt-8 sm:flex sm:justify-center sm:items-center sm:h-[400px]'>
         <div className='w-full h-[250px] relative sm:w-[50%] sm:h-5/6'>
            <Image
               src={'/event502.jpg'}
               alt='placeholder photo'
               fill
               className='object-cover'
               sizes="50vh"
            />
         </div>

         <div className='sm:w-[45%]'>
            <div className='w-4/6 mx-auto aspect-video relative mt-8'>
               <Image
                  src={'/event504.jpg'}
                  alt=''
                  fill
                  sizes="50vh"
                  className='object-cover'
               />
            </div>
            <div className='mt-8 text-center'>
               <h3 className={`${playfair.className} text-xl`}>Romantic Lakeside Wedding</h3>
               <p className='mt-4'>
                  <Link
                     href={'/recent-work/lakeside-wedding'}
                     className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
                  >
                     See Album
                  </Link>
               </p>
            </div>
         </div>
      </div>
   )
}
