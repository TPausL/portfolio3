import Graph from "./Graph";
import HeadlineTyped from "./HeadlineTyped";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Page() {
    return (
        <main className="min-h-screen text-white relative flex flex-col items-center px-4 pt-10 pb-16">
            {/* Headline typed component */}
            <div className="w-full text-center mb-8">
                <HeadlineTyped
                    style={{ fontFamily: "bungee" }}
                    className="inline-block text-center absolute"
                >
                    {"Timo\nPeters"}
                </HeadlineTyped>
            </div>

            {/* Mobile View: Clean message relying on header/pages */}
            <div className="block md:hidden w-full flex-1 flex flex-col items-center justify-center px-2 text-center my-auto">
                <div className="max-w-sm space-y-6 rounded-3xl border border-white/10 bg-[#07202c]/40 p-8 backdrop-blur-2xl shadow-2xl">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#07ebc8]/10 border border-[#07ebc8]/20 text-xs font-semibold text-[#07ebc8]">
                        <Sparkles className="size-3.5 animate-pulse" />
                        Portfolio
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-[#f2f7f6]">
                            Welcome
                        </h1>
                        <p className="text-sm text-[#b8cbc9] leading-relaxed">
                            Use the menu in the top right to explore my work experience, education, volunteering, and projects.
                        </p>
                    </div>

                    <div className="pt-2">
                        <a href="/work-experience">
                            <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#07ebc8] to-[#04a88e] px-5 py-3 text-sm font-bold text-[#07202c] shadow-lg shadow-[#07ebc8]/25 transition-all active:scale-95">
                                View Work Experience
                                <ArrowRight className="size-4" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop View: Renders only the graph component */}
            <div className="w-full hidden md:flex flex-col items-center justify-center">
                <Graph />
            </div>
        </main>
    );
}