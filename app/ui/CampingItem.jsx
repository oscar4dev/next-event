import Image from "next/image";

export default function CampingItem({ item }) {
   return (
      <li className="h-[250px] w-1/2 relative sm:h-[300px] sm:w-[30%]">
         <Image 
            src={ item.image }
            alt={ item.title }
            fill
            className="object-cover"
            sizes="50vh"
            priority
         />
      </li>
   )
}
