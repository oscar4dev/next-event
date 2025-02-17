
import LoginForm from "../ui/LoginForm";

export const metadata = {
   title: 'Contact'
}

export default function Page() {

   return (
      <main className="max-w-[768px] mx-auto">
         <p className="text-center mt-12 text-xl">Time to log in...</p>

         <LoginForm />
      </main>
   )
}
