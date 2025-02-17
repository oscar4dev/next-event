import Image from "next/image";

export default function ButtonSpinner() {
   return (
      <div className="h-4 w-4 relative">
         <Image 
            src={ '/spinner.gif' }
            alt="loading spinner"
            fill
            className=""
            sizes="10vh"
            priority={ false }
         />
      </div>
   )
}
