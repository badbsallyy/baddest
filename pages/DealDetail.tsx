import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, ShieldCheck, ExternalLink, Clock, AlertCircle } from 'lucide-react';
import { MOCK_DEALS } from '../constants';
import DealCard from '../components/DealCard';

const DealDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const deal = MOCK_DEALS.find(d => d.id === id);
  const similarDeals = MOCK_DEALS.filter(d => d.category === deal?.category && d.id !== id).slice(0, 3);

  if (!deal) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4 text-white">Deal nicht gefunden</h2>
        <Link to="/deals" className="text-purple-400 hover:text-pink-400 hover:underline transition-colors">Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-12 min-h-screen">
      {/* Mobile Back Header */}
      <div className="md:hidden sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center">
        <Link to="/deals" className="p-2 -ml-2 text-white">
          <ArrowLeft size={24} />
        </Link>
        <button className="p-2 text-white">
          <Share2 size={24} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <Link to="/deals" className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-8 transition-colors">
          <ArrowLeft size={18} /> Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square backdrop-blur-lg bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 left-4">
               <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-purple-500/50">
                -{deal.discountPercentage}%
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="backdrop-blur-lg bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                {deal.category}
              </span>
              {deal.isHot && (
                 <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-red-500/50">
                   <AlertCircle size={12} /> Hot
                 </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-2">
              {deal.title}
            </h1>
            <p className="text-gray-400 font-medium mb-6">Verkauft von <span className="text-white font-bold underline decoration-purple-400/30">{deal.shopName}</span></p>

            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                  {deal.priceNew}€
                </span>
                <span className="text-xl text-gray-500 line-through mb-1.5 font-medium">
                  {deal.priceOld}€
                </span>
              </div>
              <p className="text-green-400 text-sm font-bold flex items-center gap-1">
                <Clock size={14} /> Preis geprüft: Heute
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3 text-white">Warum der Deal rockt:</h3>
              <ul className="space-y-3">
                {deal.highlights?.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 min-w-[1.25rem] h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border border-green-500/30">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              {deal.description}
            </p>
            
            <div className="hidden md:block">
              <a 
                href={deal.link}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Zum Deal <ExternalLink size={20} />
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                <ShieldCheck size={14} /> 
                <span>Sicherer Link • Verifiziert • Affiliate Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Deals */}
      {similarDeals.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Das könnte dir auch gefallen</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarDeals.map(d => <DealCard key={d.id} deal={d} />)}
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full backdrop-blur-xl bg-black/80 border-t border-white/10 p-4 md:hidden z-50 shadow-2xl shadow-purple-500/20">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center">
            <span className="text-xs text-gray-500 line-through">{deal.priceOld}€</span>
            <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{deal.priceNew}€</span>
          </div>
          <a 
            href={deal.link}
             target="_blank"
             rel="noreferrer"
             className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 active:scale-95 transition-all"
          >
            Zum Deal <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-[10px] text-center text-gray-500 mt-2">
          *Enthält Affiliate Links. Kein Aufpreis für dich.
        </p>
      </div>
    </div>
  );
};

export default DealDetail;