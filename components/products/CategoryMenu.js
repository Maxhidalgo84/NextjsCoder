"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/todos"},
    { label: "Malbec", href: "/productos/Malbec" },
    { label: "Cabernet", href: "/productos/Cabernet" },
    { label: "Blend", href: "/productos/Blend" }
]



export const CategoryMenu  =()=>{

    const pathname = usePathname()

    return (
         
            
        <section className="flex flex-col text-center sm:flex-row border-b-slate-500 rounded-lg bg-black w-1/2 m-auto text-white md:gap-4 justify-center">
                
            {links.map((link)=> (
                <Link
                    key={link.label}
                    href={link.href}
                    className={`${pathname === link.href ? "font-bold" : ""} p-4 py-4 hover:scale-125 `}                
                >
                    {link.label}

                
                </Link>


            ))}

        </section>
         
    )

}

