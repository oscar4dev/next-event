import Image from "next/image";

export default function LoadingSpinner() {
   return (
      <div className="h-14 w-14 relative mx-auto pt-12">
         <Image 
            src={ '/spinner.gif' }
            alt="loading spinner"
            fill
            sizes="50vh"
            priority
            className="object-cover"
         />
      </div>
   )
}
