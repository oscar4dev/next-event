'use client'

import { useActionState } from "react";
import { googleLogin } from "../_lib/actions";
import ButtonSpinner from "../ui/ButtonSpinner";

export default function LoginForm() {

   const [state, action, isPending] = useActionState(googleLogin, null)

   return (
      <form action={action} className="space-y-4 mt-8 w-5/6 mx-auto">
         <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
               type="text"
               id="username"
               name="username"
               required
               defaultValue={''}
               placeholder="Enter username"
               className="border-2 border-slate-900 p-1"
            />
         </div>

         <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
               type="password"
               id="password"
               required
               placeholder='Enter password'
               name="password"
               className="border-2 border-slate-900 p-1"
            />
         </div>

         <p className="">
            <button className="bg-slate-900 text-slate-50 text-sm px-4 py-2">
               {
                  isPending
                     ? <span className="flex items-center gap-1">
                        <ButtonSpinner /> Loading...
                     </span>
                     : 'Login'
               }
            </button>
         </p>

         {
            state
               ? <p className="text-red-500">{state}</p>
               : ''
         }
      </form>
   )
}

