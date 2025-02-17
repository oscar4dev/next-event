'use client'

import React, { useActionState } from 'react'
import { Playfair_Display } from "next/font/google";
import { sendMessage } from '../_lib/actions';
import ButtonSpinner from '../ui/ButtonSpinner';

const playfair = Playfair_Display({
   subsets: ['latin']
})

const initialState = {
   message: ''
}

export default function Page() {

   const [state, action, isPending] = useActionState(sendMessage, initialState)

   return (
      <main className='px-4 max-w-[1024px] mx-auto'>
         <h1 className={`${playfair.className} mt-12 bg-sky-100 inline-block px-4 py-8 text-3xl capitalize tracking-wider sm:text-4xl`}>
            Reach out
         </h1>

         <form
            className='mb-12'
            action={action}
         >
            <h2 className={`${playfair.className} mt-12 text-2xl uppercase`}>
               No place to far and no idea too big.
            </h2>

            <div className='mt-8 flex flex-col gap-2 max-w-[768px]'>
               <label htmlFor='firstName'>First name</label>
               <input
                  type='name'
                  id='firstName'
                  required
                  name='firstName'
                  placeholder='Eg John'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-4 flex flex-col gap-2 max-w-[768px]'>
               <label htmlFor='lastName'>Last name</label>
               <input
                  type='name'
                  id='lastName'
                  required
                  name='lastName'
                  placeholder='Eg Doe'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-4 flex flex-col gap-2 max-w-[768px]'>
               <label htmlFor='email'>Email</label>
               <input
                  type='email'
                  id='email'
                  required
                  name='email'
                  placeholder='johndoe@email.com'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-8 max-w-[768px]'>

               <h3>I would like a photo of:</h3>

               <div className='sm:flex sm:justify-between sm:w-5/6'>
                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='wedding'
                        name='wedding'
                        className='h-5 w-5'
                     />
                     <label htmlFor='wedding'>Wedding</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='coupleSession'
                        name='coupleSession'
                        className='h-5 w-5'
                     />
                     <label htmlFor='coupleSession'>Couple session</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='elopement'
                        name='elopement'
                        className='h-5 w-5'
                     />
                     <label htmlFor='elopement'>Elopement</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='other'
                        name='other'
                        className='h-5 w-5'
                     />
                     <label htmlFor='other'>Other</label>
                  </div>
               </div>

            </div>

            <div className='mt-8 flex flex-col max-w-[768px]'>
               <label htmlFor='message'>Message</label>
               <textarea
                  id='message'
                  name='message'
                  placeholder='What did you have in mind?'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-8 flex flex-col max-w-[768px]'>
               <label htmlFor='price'>What&apos;s your ideal price range for your photos?</label>
               <textarea
                  id='price'
                  name='price'
                  placeholder='Your price'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-8 flex flex-col max-w-[768px]'>
               <label htmlFor='story'>Tell me about your story</label>
               <textarea
                  id='story'
                  name='story'
                  placeholder='Your story'
                  className='border border-slate-900 w-5/6 py-1 px-2'
               />
            </div>

            <div className='mt-8 max-w-[768px]'>
               <h3 className=''>How did you find me?</h3>
               <div className='sm:flex sm:justify-between sm:w-5/6'>
                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='instagram'
                        name='instagram'
                        className='h-5 w-5'
                     />
                     <label htmlFor='instagram'>Instagram</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='referral'
                        name='referral'
                        className='h-5 w-5'
                     />
                     <label htmlFor='referral'>Friend referral</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='google'
                        name='google'
                        className='h-5 w-5'
                     />
                     <label htmlFor='google'>Google search</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='Planner'
                        name='planner'
                        className='h-5 w-5'
                     />
                     <label htmlFor='google'>Planner</label>
                  </div>

                  <div className='mt-4 space-x-2 flex items-center'>
                     <input
                        type='checkbox'
                        id='other'
                        name='other'
                        className='h-5 w-5'
                     />
                     <label htmlFor='other'>Other</label>
                  </div>
               </div>
            </div>

            <p className='mt-8'>
               <button className='bg-slate-900 text-slate-50 capitalize tracking-wider px-4 py-2 text-sm hover:opacity-80 duration-300 ease-in-out'>
                  {
                     isPending
                        ?
                        <span className='flex items-center gap-1'>Submitting... <ButtonSpinner /></span>
                        : 'submit'
                  }
               </button>
            </p>

         </form>
      </main>
   )
}
