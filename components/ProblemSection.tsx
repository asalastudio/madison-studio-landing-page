import React from 'react';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 bg-ink-black text-parchment relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(184,149,106,0.3),_transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(184,149,106,0.2),_transparent_50%)]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-6">The Problem</p>

                    <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8 leading-tight">
                        You should not rewrite every SKU for every channel
                    </h2>

                    <div className="text-lg lg:text-xl text-stone leading-relaxed space-y-6 max-w-3xl mx-auto">
                        <p>
                            You write a product story for the site. Then you flatten it for Etsy. Then again for Amazon fields. Then a caption. By Friday the scent notes, materials, and claims no longer match.
                        </p>

                        <p>
                            Owner-operated perfume, cosmetics, and jewelry shops feel this most: small catalogs, high craft, and marketplace copy that still has to sound like the brand.
                        </p>

                        <p className="font-accent italic text-2xl text-parchment pt-4">
                            One master. Then the channels.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
