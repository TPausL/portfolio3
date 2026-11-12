import { graphData, categoryColors, NodeCategory } from "./GraphData";

export function HeroTitle() {
    return (
        <section className="text-center py-16">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white drop-shadow-2xl">
                Timo Peters
            </h1>
            <p className="mt-4 text-lg text-neutral-400">Portfolio & Experience</p>
        </section>
    );
}
