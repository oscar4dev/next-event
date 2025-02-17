import { Suspense } from "react"
import { Playfair_Display } from "next/font/google";

import LoadingSpinner from "@/app/ui/LoadingSpinner"
import AdventureData from "@/app/ui/AdventureData";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export const metadata = {
   title: 'Recent Work '
}

export default function page() {

   return (
      <main className="max-w-[1024px] mx-auto">
         <h1 className={`${playfair.className} mt-8 mx-4 text-3xl capitalize sm:text-4xl`}>
            Adventure Elopement in the Sierras
         </h1>
         <p className={`${playfair.className} mx-4 mt-4`}>April 28th, 2024</p>
         <Suspense fallback={<LoadingSpinner />}>
            <AdventureData />
         </Suspense>
      </main>
   )
}

