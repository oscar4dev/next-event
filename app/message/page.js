import { getMessages } from "../_lib/eventApi"
import MessageItem from "../ui/MessageItem"

export const metadata = {
   title: 'Messages'
}

export default async function page() {

   const messages = await getMessages()

   if (!messages.length) return <p className="text-center mt-12">
      You currently do not have any message.
   </p>

   return (
      <main className="min-h-dvh sm:w-[1024px] sm:mx-auto">
         <p className="text-center mt-12">
            You have <span>{ messages.length } </span>
            message{messages.length > 0 ? 's' : ''}
         </p>
         <ul className="mt-4 space-y-4 mb-12">
            {
               messages && messages.map((item) => {
                  return <MessageItem
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </main>
   )
}
