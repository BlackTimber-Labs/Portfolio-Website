import Link from "next/link"
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
    const router = useRouter();
    return (
      <Link href={href} scroll={false}>
        <a
          className={`${
            router.pathname === href
              ? "text-gray-900 border-gray-800"
              : "text-gray-600 hover:text-gray-700 border-transparent"
          } ${className} block pb-2 font-semibold text-sm sm:text-base border-b-2 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
        >
          {children}
        </a>
      </Link>
    );
  };

export const Site = ({ children }) => {
    return (
        <>
        <section className="p-4  grid grid-cols-auto-col-fit">
        <main className=" px-12  py-4 bg-white rounded-lg" >
        
     <div
       className="mt-4 flex space-x-12 justify-center items-center  overflow-x-auto scrollbar-none"
       style={{ boxShadow: "inset 0 -2px 0 #edf2f7" }}
     >
       <ActiveLink className="text-lg" href="/">
         About Me
       </ActiveLink>

       <ActiveLink  href="/resume" className="text-lg">
         Resume
       </ActiveLink>

       <ActiveLink href="/portfolio" className="text-lg">
         Portfolio
       </ActiveLink>
     </div>

     <div>{children}</div>
        </main>
        </ section>
        </>
    )
}