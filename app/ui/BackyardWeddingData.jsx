import { getBackyardWedding } from "../_lib/eventApi"
import BackyardWeddingItem from "./BackyardWeddigItem"

export default async function BackyardWeddingData() {

   const data = await getBackyardWedding()   

   return (
      <div>
         <ul className="flex flex-wrap my-8 sm:mx-4 sm:gap-4 sm:items-center sm:justify-center">
            {
               data.map((item) => {
                  return <BackyardWeddingItem
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
