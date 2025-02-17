import Link from "next/link";

export default function notFound() {
   return (
      <main className="flex flex-col items-center pt-12">
         <h2 className="text-2xl">😢 404 Not Found</h2>
         <p className="mt-4">Cound not find the requested page.</p>
         <p className="mt-8">
            <Link
               href={'/'}
               className="bg-slate-900 text-slate-50 text-sm px-4 py-2"
            >
               &larr; Go Back
            </Link>
         </p>
      </main>
   )
}
