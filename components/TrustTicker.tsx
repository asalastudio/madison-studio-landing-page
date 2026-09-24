import React from 'react';

const TrustTicker: React.FC = () => {
    const items = [
        'Perfume',
        'Cosmetics',
        'Jewelry',
        'Etsy listings',
        'Shopify',
        'Amazon templates',
        'Temu templates',
    ];

    return (
        <div className="border-y border-stone bg-parchment py-10 overflow-hidden">
            <p className="text-center text-xs font-semibold tracking-wider text-charcoal/60 uppercase mb-8">
                Built for marketplace beauty & jewelry shops
            </p>
            <div className="relative w-full overflow-hidden">
                <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
                    {/* First set */}
                    <div className="flex w-1/2 justify-around items-center px-10 gap-12">
                        {items.map((item, i) => (
                            <span
                                key={`a-${i}`}
                                className="text-xl font-serif font-medium text-charcoal/40 hover:text-ink-black cursor-default transition-colors whitespace-nowrap"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex w-1/2 justify-around items-center px-10 gap-12">
                        {items.map((item, i) => (
                            <span
                                key={`b-${i}`}
                                className="text-xl font-serif font-medium text-stone-400 hover:text-ink-black cursor-default transition-colors whitespace-nowrap"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustTicker;
