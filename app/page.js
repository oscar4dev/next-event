import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from "next/font/google";
import LakeSideWedding from './ui/LakeSideWedding';
import Adventure from './ui/Adventure';
import Camping from './ui/Camping';
import BackyardWedding from './ui/BackyardWedding';
import Link from 'next/link';
import Testimonial from './ui/Testimonial';

const playfair = Playfair_Display({
  subsets: ['latin']
})

export default function page() {
  return (
    <>
      <main className='relative max-w-[1024px] mx-auto'>
        <div className='sm:flex sm:flex-row-reverse sm:items-center sm:justify-center'>
          
          <div className='w-full h-[400px] relative max-w-[1024px] mx-auto sm:h-[450px] sm:w-1/2'>
            <Image
              src={'/event402.jpg'}
              alt='placeholder screenshot'
              fill
              sizes="50vh"
              priority
              className='object-cover'
            />
          </div>

          <div className='sm:w-1/2 bg-slate-500 sm:h-[450px] sm:flex sm:items-center sm:justify-center'>
            <h1 className={`${playfair.className} text-slate-50 absolute top-4 left-4 text-3xl capitalize sm:text-4xl sm:relative`}>
              Visual <br />
              Storryteller <br />
              for the widly <br />
              in love
            </h1>
          </div>

        </div>

        <h2 className={`${playfair.className} bg-sky-100 inline-block px-4 py-8 mt-12 text-2xl tracking-wider uppercase`}>
          Recent Work
        </h2>

        <LakeSideWedding />

        <Adventure />

        <Camping />

        <BackyardWedding />

        <p className='text-center mt-12'>
          <Link
            href={'/client-gallery'}
            className='bg-sky-500 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
          >
            See All &rarr;
          </Link>
        </p>

        <div className='my-12'>
          <Testimonial />
        </div>

      </main>
    </>
  )
}
