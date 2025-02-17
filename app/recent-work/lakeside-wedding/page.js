import LakesideWeddingData from "@/app/ui/LakesideWeddingData"
import LoadingSpinner from "@/app/ui/LoadingSpinner"
import { Suspense } from "react"

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export const metadata = {
   title: 'Recent Work '
}

export default function page() {

   return (
      <main className="max-w-[1024px] mx-auto">
         <h1 className={`${playfair.className} mt-8 mx-4 text-3xl capitalize sm:text-4xl`}>Romantic Lakeside Wedding</h1>
         <p className={ `${ playfair.className } mx-4 mt-4` }>June 28th, 2023</p>
         <Suspense fallback={<LoadingSpinner />}>
            <LakesideWeddingData />
         </Suspense>
      </main>
   )
}
