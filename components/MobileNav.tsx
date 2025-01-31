'use client';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
  
export default function MobileNav({user} : MobileNavProps) {
    const pathName = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src="/icons/hamburger.svg"
                        width={24}
                        height={24}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
                        <Image src="/icons/logo.svg" width={34} height={34} alt="logo"/>
                        <h1 className="text-24 font-ibm-plex-serif font-bold">
                            Horizon
                        </h1>
                    </Link>
                    <div className="mobilenac-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link) => { 
                                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);
                                    return (
                                        <SheetClose asChild key={link.label}>
                                            <Link key={link.label} href={link.route} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                                                <Image src={link.imgURL} alt="icon" width={20} height={20} className={cn({'brightness-[3] invert-0': isActive})} />
                                                <p className={cn('text-black-2', { 'text-white': isActive })}>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    ) 
                                })}
                            </nav>
                        </SheetClose>
                    </div>
            
                </SheetContent>
            </Sheet>
        </section> 
    )
}