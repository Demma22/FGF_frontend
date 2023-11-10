import { Sidebar } from "../menu/Sidebar";
import { Header } from "../Header";
import { Header2 } from "../Header2";

export function Layout2({ children }) {




    return (
        // <main className="flex w-screen h-screen items-center justify-between outline fixed">
        <main className="flex w-screen h-screen items-start justify-start fixed top-0 left-0">
            {/* <Sidebar /> */}
            <section className="w-full min-h-screen bg-[#F4F4F5]">
                <Header2 />
                <section className="px-5 py-5 text-[#434C50] h-[calc(100vh-70px-2rem)] overflow-y-scroll rounded-sm mx-7 my-2">{children}</section>
            </section>
        </main>
    );
}
