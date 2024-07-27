'use client';
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar({ user } : SiderbarProps) {
    const pathName = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                    <Image src="/icons/logo.svg" width={40} height={40} alt="logo" className="size-[24px] max-xl:size-14"/>
                    <h1 className="sidebar-logo">
                        Horizon
                    </h1>
                </Link>
                {sidebarLinks.map((link) => { 
                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);
                    return (
                        <Link key={link.label} href={link.route} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                           <div className="relative size-6">
                               <Image src={link.imgURL} alt="icon" fill className={cn({'brightness-[3]': isActive})} />
                           </div>
                        </Link>
                    ) 
                })}
            </nav>
        </section>
    )
}