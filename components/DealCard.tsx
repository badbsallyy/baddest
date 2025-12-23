import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Flame } from 'lucide-react';
import { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <Link 
      to={`/deal/${deal.id}`}
      className="group block backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-black/20">
        <img 
          src={deal.image} 
          alt={deal.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {deal.isHot && (
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-lg shadow-red-500/50">
              <Flame size={12} fill="currentColor" /> HOT
            </span>
          )}
          {deal.isNew && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg shadow-purple-500/50">
              NEU
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="backdrop-blur-lg bg-white/20 border border-white/30 text-white font-bold text-sm px-2 py-1 rounded-lg shadow-lg">
            -{deal.discountPercentage}%
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            {deal.shopName}
          </span>
          {deal.expiresAt && (
             <span className="text-[10px] text-orange-400 flex items-center gap-1 bg-orange-500/20 backdrop-blur-lg px-1.5 py-0.5 rounded border border-orange-500/30">
               <Clock size={10} /> Endet bald
             </span>
          )}
        </div>
        
        <h3 className="font-bold text-white leading-tight mb-3 line-clamp-2 min-h-[2.5rem] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {deal.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {deal.priceNew}€
            </span>
            <span className="text-sm text-gray-500 line-through decoration-gray-500">
              {deal.priceOld}€
            </span>
          </div>
          <button className="bg-white/10 backdrop-blur-lg text-white p-2 rounded-full border border-white/20 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;