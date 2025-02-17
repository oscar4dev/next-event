import Image from "next/image";
import Link from "next/link";

export default function GalleryDataItem({ item }) {
   return (
      <li className="w-1/2 h-[300px] relative overflow-hidden sm:w-[30%]">
         <Link href={ `/client-gallery/${ item.id }` }>
            <Image
               src={item.image}
               alt={item.title}
               fill
               className="object-cover hover:scale-[1.05] duration-300 ease-in-out"
               sizes="50vh"
               priority
            />
         </Link>
      </li>
   )
}
