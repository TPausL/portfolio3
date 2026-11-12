export function ProjectsSection() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {[
                    { title: "TECKboard", desc: "Digital Information-system" },
                    { title: "Pick by Light", desc: "Storage System" },
                    { title: "DevLights", desc: "API-controlled Lighting" },
                ].map((p) => (
                    <a key={p.title} href="#" className="block p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition border border-neutral-700">
                        <h3 className="font-bold text-white">{p.title}</h3>
                        <p className="text-sm text-neutral-400">{p.desc}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
