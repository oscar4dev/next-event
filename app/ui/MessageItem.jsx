'use client'

import { useActionState } from "react";
import { deleteThisMessage } from "../_lib/actions";
import ButtonSpinner from "./ButtonSpinner";

function formatDate(date, format) {
   if (!(date instanceof Date)) {
      date = new Date(date); // Try to convert to a Date object if it's not already
      if (isNaN(date)) {
         return "Invalid Date"; // Handle invalid date input
      }
   }

   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
   const day = String(date.getDate()).padStart(2, '0');
   const hours = String(date.getHours()).padStart(2, '0');
   const minutes = String(date.getMinutes()).padStart(2, '0');
   const seconds = String(date.getSeconds()).padStart(2, '0');

   format = format || 'YYYY-MM-DD'; // Default format

   const replacements = {
      YYYY: year,
      YY: String(year).slice(-2), // Last two digits of the year
      MM: month,
      M: parseInt(month), // Month as a number without leading zero
      DD: day,
      D: parseInt(day), // Day as a number without leading zero
      HH: hours,
      H: parseInt(hours), // Hours without leading zero
      mm: minutes,
      m: parseInt(minutes), // Minutes without leading zero
      ss: seconds,
      s: parseInt(seconds) // Seconds without leading zero
   };

   let formattedDate = format;
   for (const placeholder in replacements) {
      formattedDate = formattedDate.replace(new RegExp(placeholder, 'g'), replacements[placeholder]);
   }

   return formattedDate;
}


export default function MessageItem({ item }) {

   const deleteThisMessageWithId = deleteThisMessage.bind(null, item.id)
   
   const [state, action, isPending] = useActionState(deleteThisMessageWithId, null)

   return (
      <li className="mx-4 bg-sky-100 p-2">
         <p className='flex flex-col'>
            <span className="capitalize">First name: {item.firstName}</span>
            <span className="capitalize">Last name: {item.lastName}</span>
            <span>Email address: {item.email}</span>
         </p>
         <p>Message: {item.message}</p>
         <p>{item.firstName}'s story: {item.story}</p>
         <p>{item.firstName} is willing to pay {item.price}</p>
         <p>{formatDate(item.created_at)}</p>

         <form
            action={action}
            className="mt-2 text-end"
         >
            <button className="text-sm bg-slate-900 text-slate-50 px-4 py-2">
               {
                  isPending 
                     ? <span className="flex items-center gap-1">Deleting... <ButtonSpinner /></span> 
                     : 'Delete'
               }
            </button>
         </form>
      </li>
   )
}
