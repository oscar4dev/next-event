'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
   subsets: ['latin']
})

export default function Testimonial() {

   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex(
            (cur) => cur < images.length - 1 ? cur + 1 : 0
         )
      }, 5000);

      return () => clearInterval(interval)
   }, [])

   const images = [
      {
         image: '/event101.jpg',
         alt: 'image description',
         title: 'Amazing service!',
         text: 'Fast shipping and the product is exactly as described.  Highly recommend!',
         name: 'Jane',
      },
      {
         image: '/event201.jpg',
         alt: 'image description',
         title: 'Love this store!',
         text: 'Great selection and prices.  Will definitely be back.',
         name: 'John',
      },
      {
         image: '/event301.jpg',
         alt: 'image description',
         title: 'Excellent Quality!',
         text: 'So happy with my purchase!  The quality is excellent and it arrived quickly.  Thanks!',
         name: 'Paul',
      },
      {
         image: '/event401.jpg',
         alt: 'image description',
         title: 'Very helpful',
         text: 'Excellent customer service. They answered all my questions promptly and were very helpful.',
         name: 'Frank',
      },
      {
         image: '/event501.jpg',
         alt: 'image description',
         title: 'Five stars',
         text: 'Great product, great price.  What more could you ask for?  Five stars!',
         name: 'Kingsley',
      },
      {
         image: '/event601.jpg',
         alt: 'image description',
         title: 'Love this store!',
         text: 'Great selection and prices.  Will definitely be back.',
         name: 'Doe',
      },
      {
         image: '/event701.jpg',
         alt: 'image description',
         title: 'great experience',
         text: 'This is my new go-to shop!  Such a great experience from start to finish.',
         name: 'Musk',
      },
   ]

   return (
      <div className="bg-sky-100 py-12">
         <h2 className={`${playfair.className} text-center text-2xl tracking-wider uppercase`}>
            Loving Words
         </h2>
         {
            images.map(
               (item, i) => <div
                  key={i}
                  className={`${i === currentIndex ? 'object-cover' : 'hidden'} mt-8 max-w-[300px] mx-auto`}
               >
                  <div className="w-full h-[300px] relative">
                     <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="50vh"
                        priority
                        className='object-cover rounded-full'
                     />
                  </div>
                  <div className="text-center mt-4">
                     <p className="text-lg capitalize">{item.title}</p>
                     <p className="my-2">{item.text}</p>
                     <p className="font-bold">{item.name}</p>
                  </div>
               </div>
            )
         }

         <div className="text-center space-x-2 mt-4">
            {
               images.map((_, i) => {
                  return <button
                     key={ i }
                     onClick={ () => setCurrentIndex(i) }
                     className={ `${ currentIndex === i ? 'bg-blue-500' : '' } h-4 w-4 rounded-full bg-slate-900` }
                  ></button>
               })
            }
         </div>
      </div>
   )
}
