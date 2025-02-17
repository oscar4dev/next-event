import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export const metadata = {
   title: 'Offerings'
}

export default function page() {
   return (
      <main className="max-w-[1024px] mx-auto">
         <h1 className={`${playfair.className} mt-12 bg-sky-100 inline-block px-4 py-8 text-3xl capitalize tracking-wider sm:text-4xl`}>

            Creating
            <br />
            Memories
            <br />
            Together
         </h1>

         <div className="w-full h-[400px] relative mt-12 sm:h-[450px]">
            <Image
               src={'/event705.jpg'}
               alt="placeholder image"
               fill
               sizes="50vh"
               priority
               className="object-cover"
            />
         </div>

         <p className="mx-4 mt-12">
            Telling your love story through the lens of my
            camera is my passion. My mission is to make
            this special day calm and fun, and capture
            your big moments well beyond your expectations.
         </p>

         <h2 className={`${playfair.className} mt-12 text-2xl mx-4`}>
            Offerings
         </h2>

         <div className="px-4 sm:flex sm:items-center sm:justify-between">
            <div>
               <h3 className={`${playfair.className} text-xl mt-8`}>
                  Weddings
               </h3>

               <ul className="mx-4 list-disc mt-4">
                  <li className="">Wedding day coverage</li>
                  <li>High res, edited photos</li>
                  <li>Customized, online gallery</li>
                  <li>Printing rights</li>
                  <li>Location scouting</li>
               </ul>

               <h4 className={`${playfair.className} mx-4 text-lg mt-4`}>Price:</h4>
               <p className="mx-4">Starting at 3,000$</p>
            </div>

            <div>
               <h3 className={`${playfair.className} text-xl mt-8`}>
                  ELOPEMENTS
               </h3>

               <ul className="mx-4 list-disc mt-4">
                  <li>3 hours + coverage</li>
                  <li>High res, edited photos</li>
                  <li>Customized, online gallery</li>
                  <li>Printing rights</li>
                  <li>Location scouting</li>
               </ul>

               <h4 className={`${playfair.className} mx-4 text-lg mt-4`}>Price:</h4>
               <p className="mx-4">Starting at 1,500$</p>
            </div>

            <div>
               <h3 className={`${playfair.className} text-xl mt-8`}>
                  Couple Session
               </h3>

               <ul className="mx-4 list-disc mt-4">
                  <li>1 hour + coverage</li>
                  <li>High res, edited photos</li>
                  <li>Customized, online gallery</li>
                  <li>Printing rights</li>
                  <li>Location scouting</li>
               </ul>

               <h4 className={`${playfair.className} mx-4 text-lg mt-4`}>Price:</h4>
               <p className="mx-4">Starting at 500$</p>
            </div>
         </div>

         <h2 className={`${playfair.className} mt-12 text-2xl mx-4`}>
            Have Something
            <br />
            Else In Mind?
         </h2>
         <p className="mt-8 mx-4">
            Share your vision with me and we&apos;ll work out
            the best plan for your special day.
         </p>

         <p className="mx-4 my-8">
            <Link
               href={'/contact'}
               className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
            >
               Get in touch
            </Link>
         </p>
      </main>
   )
}
