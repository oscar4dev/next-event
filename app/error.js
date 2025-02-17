'use client'

import { useEffect } from "react"

export default function Error({ reset, error }) {

   useEffect(() => {
      console.error(error)
   }, [error])

   return (
      <main className="flex flex-col items-center pt-12">
         <h2 className="">😢 Something went wrong</h2>
         <p className="mt-8">
            <button
               onClick={ () => reset() }
               className="bg-slate-900 text-slate-50 text-sm px-4 py-2"
            >
               Reset
            </button>
         </p>
      </main>
   )
}
