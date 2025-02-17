import { getLakeside } from "../_lib/eventApi"
import LakesideWeddingItem from "./LakesideWeddingItem"

export default async function LakesideWeddingData() {

   const data = await getLakeside()   

   return (
      <div>
         <ul className="flex flex-wrap my-8 sm:mx-4 sm:gap-4 sm:items-center sm:justify-center">
            {
               data.map((item) => {
                  return <LakesideWeddingItem 
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
