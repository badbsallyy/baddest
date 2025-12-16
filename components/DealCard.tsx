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
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={deal.image} 
          alt={deal.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {deal.isHot && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
              <Flame size={12} fill="currentColor" /> HOT
            </span>
          )}
          {deal.isNew && (
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              NEU
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3">
          <span className="bg-white/90 backdrop-blur text-dark font-bold text-sm px-2 py-1 rounded-lg border border-gray-200 shadow-sm">
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
             <span className="text-[10px] text-orange-500 flex items-center gap-1 bg-orange-50 px-1.5 py-0.5 rounded">
               <Clock size={10} /> Endet bald
             </span>
          )}
        </div>
        
        <h3 className="font-bold text-dark leading-tight mb-3 line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {deal.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-primary">
              {deal.priceNew}€
            </span>
            <span className="text-sm text-gray-400 line-through decoration-gray-400">
              {deal.priceOld}€
            </span>
          </div>
          <button className="bg-gray-100 text-dark p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;