'use server'

import { redirect } from "next/navigation";
import { createMessage, deleteMessage } from "./eventApi";
import { signIn } from "../../auth";

export async function sendMessage(prevState, formdata) {

   const rawFormdata = {
      firstName: formdata.get('firstName'),
      lastName: formdata.get('lastName'),
      email: formdata.get('email'),
      message: formdata.get('message'),
      price: formdata.get('price'),
      story: formdata.get('story'),
   }

   await createMessage(rawFormdata)

   redirect('/thank-you')

}

export async function deleteThisMessage (id) {
   deleteMessage(id)
   redirect('/delete')
}

export async function googleLogin (prevState, formdata) {

   const userName = formdata.get('username')
   const userPassword = formdata.get('password')

   const username = 'oscar4dev'
   const password = '1234'

   if (userName === username && userPassword === password) {
      redirect('/message')
   }else {
      return 'Please provide a valid username and password'
   }
   
}

export async function logout () {

}