import Link from "next/link";

export default function page() {
   return (
      <main className="flex flex-col items-center h-dvh pt-12">
         <p>
            Thanks for reaching out. I&apos;ll get back to
            you shortly.
         </p>
         <p className="mt-8">
            <Link
               href={ '/' }
               className="bg-slate-900 text-slate-50 text-sm px-4 py-2"
            >
               Continue &rarr;
            </Link>
         </p>
      </main>
   )
}
