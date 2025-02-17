import { getAdventure, getBackyardWedding, getCamping, getLakeside } from "../_lib/eventApi"
import GalleryDataItem from "./GalleryDataItem";

function flattenArray(arr) {
   const flattened = [];

   function recursiveFlatten(arr) {
      for (let i = 0; i < arr.length; i++) {
         const element = arr[i];

         if (Array.isArray(element)) {
            recursiveFlatten(element); // Recursively flatten nested arrays
         } else {
            flattened.push(element); // Add non-array elements to the flattened array
         }
      }
   }

   recursiveFlatten(arr);
   return flattened;
}

export default async function GalleryData() {

   const data = await Promise.all([
      getLakeside(), getAdventure(),
      getCamping(), getBackyardWedding()
   ])

   const flattenedData = flattenArray(data)   

   return (
      <ul className="flex flex-wrap my-8 sm:justify-center sm:items-center sm:gap-4">
         {
            flattenedData.map((item) => {
               return <GalleryDataItem 
                  key={ item.data }
                  item={ item }
               />
            })
         }
      </ul>
   )
}
