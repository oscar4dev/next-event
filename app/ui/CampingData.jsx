import { getCamping } from "../_lib/eventApi"
import CampingItem from "./CampingItem"

export default async function CampingData() {

   const data = await getCamping()   

   return (
      <div>
         <ul className="flex flex-wrap my-8 sm:mx-4 sm:gap-4 sm:items-center sm:justify-center">
            {
               data.map((item) => {
                  return <CampingItem 
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
