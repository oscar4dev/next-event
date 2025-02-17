import Link from "next/link";

export default function page() {
   return (
      <main className="flex items-center flex-col">
         <p className="mt-12">This message has been sucessfully deleted.</p>
         <p className="mt-8">
            <Link 
               href={ '/message' }
               className="text-sm bg-slate-900 text-slate-50 px-4 py-2"
            >
               Continue
            </Link>
         </p>
      </main>
   )
}
