import { getAdventure } from "../_lib/eventApi"
import AdventureItem from "./AdventureItem"

export default async function AdventureData() {

   const data = await getAdventure()

   return (
      <div>
         <ul className="flex flex-wrap my-8 sm:mx-4 sm:gap-4 sm:items-center sm:justify-center">
            {
               data.map((item) => {
                  return <AdventureItem
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
