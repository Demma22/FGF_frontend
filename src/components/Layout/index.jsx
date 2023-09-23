import { Header } from "../Header";

export function Layout({ children }) {
    return (
   <main>
   <section className="w-full min-h-screen bg-[#F4F4F5]">
   <Header />
   <section className="px-5 py-5 text-[#434C50] h-[calc(100vh-70px-2rem)] overflow-y-scroll rounded-sm mx-7 my-2">{children}</section>
   </section>
   </main>
    );
   }