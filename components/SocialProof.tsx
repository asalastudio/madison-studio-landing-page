import React from 'react';
import { BookOpen, ShoppingBag, Camera } from 'lucide-react';

const SocialProof: React.FC = () => {
    const outcomes = [
        {
            icon: <BookOpen className="w-8 h-8 text-brass" strokeWidth={1} />,
            title: "Brand brain + PDP masters",
            description: "Ingest your voice, scent or materials language, and 10–25 products. Leave with approved product stories that actually sound like your shop.",
        },
        {
            icon: <ShoppingBag className="w-8 h-8 text-brass" strokeWidth={1} />,
            title: "Listings you can publish",
            description: "Turn each master into Etsy and Shopify listing packs, plus social from Multiply. Amazon and Temu stay honest: export templates in the pilot, not a one-click push.",
        },
        {
            icon: <Camera className="w-8 h-8 text-brass" strokeWidth={1} />,
            title: "On-brand product images",
            description: "Reference photo in, hero and variants out — archived in Library so the next listing does not start from a lost camera roll.",
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-ink-black text-parchment relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(184,149,106,0.3),_transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">The Pilot</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight">
                        What a 30-day studio actually ships
                    </h2>
                    <p className="mt-6 text-stone leading-relaxed">
                        Asala works with luxury goods and perfumery brands. We do not invent founder quotes or borrow mega-brand logos. Named case studies wait for clearance.
                    </p>
                </div>

                {/* Outcomes */}
                <div className="grid md:grid-cols-3 gap-8">
                    {outcomes.map((outcome) => (
                        <div
                            key={outcome.title}
                            className="bg-charcoal/50 p-8 rounded-2xl border border-charcoal hover:border-brass/30 transition-all"
                        >
                            <div className="mb-6">{outcome.icon}</div>
                            <h3 className="font-serif text-2xl font-medium text-parchment mb-4">
                                {outcome.title}
                            </h3>
                            <p className="text-stone leading-relaxed">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
