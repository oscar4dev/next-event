import React, { Suspense } from 'react'
import GalleryData from '../ui/GalleryData'
import LoadingSpinner from '../ui/LoadingSpinner'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export const metadata = {
   title: 'Client Gallery'
}

export default function page() {

   return (
      <main className='max-w-[1024px] mx-auto'>
         <h1 className={`${playfair.className} mt-12 bg-sky-100 inline-block px-4 py-8 text-3xl capitalize tracking-wider sm:text-4xl`}>
            Our Client
            <br />
            Gallery
         </h1>
         <p className={`mx-4 mt-8`}>
            Explore and appreciate the incredible projects
            we&apos;ve brought to life for our valued
            clients.
         </p>
         <Suspense fallback={<LoadingSpinner />}>
            <GalleryData />
         </Suspense>
      </main>
   )
}
