import LoadingSpinner from "@/app/ui/LoadingSpinner"
import { Suspense } from "react"

import { Playfair_Display } from "next/font/google";
import CampingData from "@/app/ui/CampingData";

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
            Intimate Wedding and Camping
         </h1>
         <p className={`${playfair.className} mx-4 mt-4`}>June 28th, 2023</p>
         <Suspense fallback={<LoadingSpinner />}>
            <CampingData />
         </Suspense>
      </main>
   )
}
