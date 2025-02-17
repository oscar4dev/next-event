import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export const metadata = {
   title: 'About '
}

export default function page() { 
   return (
      <main className="max-w-[1024px] mx-auto">
         <h1 className={`${playfair.className} mt-12 bg-sky-100 inline-block px-4 py-8 text-3xl capitalize tracking-wider sm:text-4xl`}>
            Your love
            <br />
            your story
         </h1>

         <div className="mt-12 sm:flex sm:items-center">
            <div className="sm:w-[45%]">
               <p className="mx-4">
                  Knowing firsthand how special this moment
                  is, and how nervous you may feel, my
                  mission is to make you comfortable and be
                  true to yourself.
                  <br />
                  <br />
                  Whether you are having an intimate wedding
                  in a backyard or an elopement on a mountain
                  top, I&apos;m ready with my camera. All my focus
                  is on you. It&apos;s all about raw emotions,
                  having fun, and creating memories that will
                  last a lifetime.
               </p>
            </div>

            <div className="w-full h-[400px] relative mt-8 sm:w-[50%]">
               <Image
                  src={'/event305.jpg'}
                  alt="placeholder image"
                  fill
                  sizes="50vh"
                  priority
                  className="object-cover"
               />
            </div>
         </div>

         <div className="mt-12">
            <h2 className={`${playfair.className} mx-4 text-2xl uppercase`}>
               why i love what i do
            </h2>

            <p className="mt-8 mb-8 mx-4">
               I love being a photographer because it
               allows me to capture fleeting moments and
               turn them into lasting memories. With each
               click of the shutter, I freeze time,
               preserving emotions, stories, and the beauty
               of the world around us. It&apos;s a privilege to
               witness life&apos;s precious moments unfold
               before my lens, and I&apos;m passionate about
               transforming them into art that evokes
               feelings and tells a unique story.
            </p>
            <p className="mx-4">
               Photography is more than just a job for me;
               it&apos;s a way of seeing the world.  I&apos;m drawn
               to the subtle details, the interplay of
               light and shadow, the unique perspectives
               that most people overlook.  My camera is my
               tool for exploring these hidden gems, for
               finding the extraordinary in the ordinary.
               It&apos;s incredibly rewarding to share these
               discoveries with others, to offer them a new
               way of looking at something familiar, and to
               connect with them through the shared
               experience of a captured moment.
               That ability to connect and share is what
               truly fuels my passion.
            </p>
         </div>

         <div className="my-12 sm:flex sm:items-center sm:justify-center">
            <div className="w-full h-[400px] relative sm:w-1/2">
               <Image
                  src={'/event704.jpg'}
                  alt="placeholder photo"
                  fill
                  sizes="50vh"
                  priority
                  className="object-cover"
               />
            </div>

            <div className="mt-8 sm:w-[45%]">
               <h3 className={`${playfair.className} capitalize mx-4 text-xl`}>
                  May this be 
                  <br /> 
                  the beginning 
                  <br />
                  of a beautiful friendship
               </h3>
               <p className="my-8 mx-4">
                  <Link
                     href={'/contact'}
                     className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'
                  >
                     Reach out
                  </Link>
               </p>
            </div>
         </div>
      </main>
   )
}
