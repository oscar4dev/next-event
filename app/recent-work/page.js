import Adventure from "./ui/Adventure";
import BackyardWedding from "./ui/BackyardWedding";
import Camping from "./ui/Camping";
import Lakeside from "./ui/Lakeside";
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
         <h1 className={`${playfair.className} mt-12 bg-sky-100 inline-block px-4 py-8 text-3xl capitalize tracking-wider sm:text-4xl`}>
            Recent weddings 
            <br />
            & Adventures
         </h1>

         <Lakeside />

         <Adventure />

         <Camping />

         <BackyardWedding />
      </main>
   )
}
