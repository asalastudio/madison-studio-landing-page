import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const TargetAudience: React.FC = () => {
  const personas = [
    {
      role: "Perfume & fragrance shops",
      desc: "You sell scent on Etsy or Shopify and rewrite notes, stories, and claims for every channel. Madison captures the brand brain once, then drafts PDP and listing copy you actually approve."
    },
    {
      role: "Cosmetics & jewelry makers",
      desc: "You are the operator. Catalog is 10–80 SKUs, not an agency roster. Madison keeps ingredients, materials, and voice consistent across listings and social."
    },
    {
      role: "Marketplace sellers (honest scope)",
      desc: "Etsy and Shopify now. Amazon and Temu as export templates during the paid pilot — we will not promise a one-click push we have not shipped."
    }
  ];

  return (
    <section className="py-32 bg-warm-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl text-center text-ink-black mb-20">Who Madison serves best.</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <ScrollReveal key={i} delay={`${i * 100}ms`} className="h-full">
              <div className="bg-white p-10 md:p-12 rounded-sm shadow-sm border-t-4 border-transparent hover:border-muted-gold transition-all duration-300 h-full">
                <h3 className="font-serif text-3xl text-ink-black mb-6">{p.role}</h3>
                <p className="text-xl text-ink-black/60 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;