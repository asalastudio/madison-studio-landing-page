import React from 'react';
import { Flower2, Sparkles, Gem, Store } from 'lucide-react';

const WhoItsFor: React.FC = () => {
    const audiences = [
        {
            icon: <Flower2 className="w-6 h-6" strokeWidth={1} />,
            title: 'Perfume & fragrance shops',
            description: 'Owner-operators who need scent language, notes, and product stories that stay claim-safe across PDP and Etsy listings.',
        },
        {
            icon: <Sparkles className="w-6 h-6" strokeWidth={1} />,
            title: 'Cosmetics & beauty makers',
            description: 'Small catalogs that still have to rewrite every SKU for the shop, social, and marketplace — from one brand brain.',
        },
        {
            icon: <Gem className="w-6 h-6" strokeWidth={1} />,
            title: 'Jewelry brands',
            description: 'Materials, making, and collection copy that does not flatten into generic marketplace filler.',
        },
        {
            icon: <Store className="w-6 h-6" strokeWidth={1} />,
            title: 'Etsy, Amazon & Temu sellers',
            description: 'Etsy and Shopify listings now. Amazon and Temu as field-map export templates in the pilot — we will not pretend we push there yet.',
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-parchment relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">Who It's For</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium text-ink-black tracking-tight">
                        Built for marketplace beauty & jewelry shops
                    </h2>
                    <p className="mt-6 text-charcoal/70 leading-relaxed">
                        First wave: owner-ops with about 10–80 SKUs already selling on Etsy or Shopify — not agencies, not 500-SKU catalogs.
                    </p>
                </div>

                {/* Audience Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience) => (
                        <div
                            key={audience.title}
                            className="bg-vellum p-8 rounded-2xl border border-stone hover:border-brass/30 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-brass/10 text-brass flex items-center justify-center mb-6 group-hover:bg-brass group-hover:text-parchment transition-colors">
                                {audience.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-xl font-medium text-ink-black mb-3">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
