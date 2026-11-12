import { useState } from "react";
import {
    Briefcase,
    GraduationCap,
    HeartHandshake,
    FolderKanban,
    Menu,
    Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    isLogo?: boolean;
};

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/", isLogo: true },
    { label: "Work Experience", href: "/work-experience", icon: Briefcase },
    { label: "Education", href: "/education", icon: GraduationCap },
    { label: "Volunteering", href: "/volunteering", icon: HeartHandshake },
    { label: "Projects", href: "/projects", icon: FolderKanban },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-transparent transition-all duration-300">
            {/* Subtle top gradient accent line */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#07ebc8]/50 to-transparent opacity-60" />

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-1.5 md:flex">
                    {NAV_ITEMS.map(({ label, href, icon: Icon, isLogo }) => (
                        isLogo ? (
                            <a
                                key={href}
                                href={href}
                                aria-label={label}
                                className="group relative inline-flex items-center justify-center rounded-xl p-3 transition-transform duration-300 hover:scale-110"
                            >
                                <img
                                    src="../assets/logo.svg"
                                    alt="Logo"
                                    className="size-6"
                                />
                            </a>
                        ) : (
                            <a key={href} href={href}>
                                <span
                                    className="
                                        group relative inline-flex items-center gap-2.5
                                        rounded-xl px-4 py-2.5
                                        font-body text-sm font-semibold
                                        text-[#b8cbc9]
                                        transition-all duration-300 ease-out
                                        hover:bg-[#07ebc8]/10
                                        hover:text-[#07ebc8]
                                        hover:shadow-sm
                                        data-[active=true]:bg-[#07ebc8]/15
                                        data-[active=true]:text-[#07ebc8]
                                        overflow-hidden
                                    "
                                >
                                    {/* Slide-in background glow on hover */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#07ebc8]/0 via-[#07ebc8]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {Icon && <Icon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />}
                                    <span className="relative z-10">{label}</span>

                                    {/* Animated bottom indicator line */}
                                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#07ebc8] transition-all duration-300 group-hover:w-3/4 data-[active=true]:w-3/4" />
                                </span>
                            </a>
                        )
                    ))}
                </nav>

                {/* Mobile navigation */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger
                            render={
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Open menu"
                                    className="
                                        relative size-10 rounded-xl
                                        border border-white/10
                                        bg-white/5 text-[#f2f7f6]
                                        transition-all duration-300
                                        hover:bg-[#07ebc8]/10
                                        hover:border-[#07ebc8]/30
                                        hover:text-[#07ebc8]
                                        active:scale-95
                                    "
                                >
                                    <Menu className="size-5 transition-transform duration-300 group-hover:rotate-90" />
                                </Button>
                            }
                        />

                        <SheetContent
                            side="right"
                            className="
                                w-80 border-l border-white/10
                                bg-[#07202c]/95 backdrop-blur-2xl
                                text-[#f2f7f6] p-6
                            "
                        >
                            <SheetHeader className="pb-6 border-b border-white/10">
                                <SheetTitle className="flex items-center gap-3 font-heading text-xl text-[#f2f7f6]">
                                    <span className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#07ebc8] to-[#04a88e] text-[#07202c] shadow-md shadow-[#07ebc8]/20">
                                        <span className="text-base font-extrabold">
                                            P
                                        </span>

                                        <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#fb6340] ring-2 ring-[#07202c]" />
                                    </span>

                                    <div className="flex flex-col text-left">
                                        <span className="font-heading font-bold">Portfolio</span>
                                        <span className="text-xs font-normal text-[#b8cbc9]/80">Timo Peters</span>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="flex flex-col gap-2.5 pt-6">
                                {NAV_ITEMS.map(({ label, href, icon: Icon, isLogo }, index) => (
                                    <a
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                    >
                                        <span
                                            className="
                                                group relative flex w-full items-center gap-3.5
                                                rounded-2xl px-4 py-3.5
                                                font-body text-base font-semibold
                                                text-[#b8cbc9]
                                                border border-transparent
                                                transition-all duration-300
                                                hover:bg-[#07ebc8]/10
                                                hover:border-[#07ebc8]/30
                                                hover:text-[#07ebc8]
                                                hover:translate-x-1
                                            "
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <span
                                                className="
                                                    flex size-10 items-center justify-center
                                                    rounded-xl
                                                    bg-white/5 border border-white/10
                                                    transition-all duration-300
                                                    group-hover:bg-[#07ebc8]/20
                                                    group-hover:border-[#07ebc8]/40
                                                    group-hover:text-[#07ebc8]
                                                "
                                            >
                                                {isLogo ? (
                                                    <img
                                                        src="../assets/logo.svg"
                                                        alt="Logo"
                                                        className="size-5 transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    Icon && <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                                                )}
                                            </span>

                                            <span className="flex-1">{label}</span>

                                            <span
                                                className="
                                                    size-2 rounded-full
                                                    bg-[#fb6340] opacity-0
                                                    transition-all duration-300
                                                    group-hover:opacity-100 group-hover:scale-125
                                                "
                                            />
                                        </span>
                                    </a>
                                ))}
                            </nav>

                            {/* Decorative footer card inside mobile menu */}
                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.08] p-4 border border-white/10 text-center">
                                <p className="text-xs text-[#b8cbc9] font-medium flex items-center justify-center gap-1.5">
                                    <Sparkles className="size-3.5 text-[#07ebc8] animate-pulse" />
                                    Interactive Portfolio Experience
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}