import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Filter, X, ChevronDown, SlidersHorizontal, ArrowUpDown, Check } from 'lucide-react';
import { MOCK_DEALS, CATEGORIES } from '../constants';
import DealCard from '../components/DealCard';
import { Category, Deal } from '../types';

const DealsFeed: React.FC = () => {
  const location = useLocation();
  const params = useParams<{ category: string }>();
  const searchParams = new URLSearchParams(location.search);
  
  // Resolve initial category from URL params or search params
  const initialCat = params.category || searchParams.get('category') || Category.ALL;
  const initialMaxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 1000;
  const filterParam = searchParams.get('filter');
  const searchTerm = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Sorting State
  const [sortOption, setSortOption] = useState<'newest' | 'popular' | 'active'>('newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sync selectedCategory when URL params change (e.g. navigation)
  useEffect(() => {
    if (params.category) {
      setSelectedCategory(params.category);
    } else if (searchParams.get('category')) {
      setSelectedCategory(searchParams.get('category')!);
    } else if (filterParam === 'hot') {
      setSelectedCategory(Category.ALL);
    }
  }, [params.category, location.search]);

  // Derive title from selected category or filter
  let pageTitle = selectedCategory === Category.ALL ? 'Alle aktuellen Deals' : `${selectedCategory} Deals`;
  if (filterParam === 'hot' || filterParam === 'trending') {
    pageTitle = '🔥 Trending Deals';
  }
  if (searchTerm) {
    pageTitle = `Suche: "${searchTerm}"`;
  }

  // Filtering & Sorting Logic
  const filteredDeals = useMemo(() => {
    let deals = MOCK_DEALS.filter((deal: Deal) => {
      const catMatch = selectedCategory === Category.ALL || deal.category === selectedCategory;
      const priceMatch = deal.priceNew <= maxPrice;
      
      const isHotFilter = filterParam === 'hot' || filterParam === 'trending';
      const hotMatch = isHotFilter ? deal.isHot : true;

      const searchLower = searchTerm.toLowerCase();
      const searchMatch = !searchTerm || 
        deal.title.toLowerCase().includes(searchLower) ||
        deal.description?.toLowerCase().includes(searchLower) ||
        deal.shopName.toLowerCase().includes(searchLower);

      return catMatch && priceMatch && hotMatch && searchMatch;
    });

    // Apply Sorting / Extra Filtering
    if (sortOption === 'popular') {
      // Sort by hotness (true first)
      deals = [...deals].sort((a, b) => (Number(b.isHot || 0) - Number(a.isHot || 0)));
    } else if (sortOption === 'newest') {
      // Sort by newness (true first)
      deals = [...deals].sort((a, b) => (Number(b.isNew || 0) - Number(a.isNew || 0)));
    } else if (sortOption === 'active') {
      // Filter expired deals (if expiresAt exists and is in the past)
      // For mock purposes, we assume checks against current date
      const now = new Date().toISOString();
      deals = deals.filter(d => !d.expiresAt || d.expiresAt > now);
    }

    return deals;
  }, [selectedCategory, maxPrice, filterParam, sortOption, searchTerm]);

  const activeFiltersCount = (selectedCategory !== Category.ALL ? 1 : 0) + (maxPrice < 1000 ? 1 : 0);

  const sortLabels = {
    newest: 'Neueste',
    popular: 'Beliebteste',
    active: 'Nur aktive'
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header & Controls */}
      <div className="bg-black/40 backdrop-blur-xl border-b border-white/10 py-8 px-4 mb-8 sticky top-16 z-30 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">{pageTitle}</h1>
            <p className="text-gray-400 text-sm">Wir haben {filteredDeals.length} Deals für dich gefunden.</p>
          </div>

          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
             
             {/* Filter & Sort Group - No Overflow to prevent clipping dropdowns */}
             <div className="flex gap-2 shrink-0 relative z-10">
                {/* Filter Button */}
                <button 
                  onClick={() => setIsFilterOpen(true)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all whitespace-nowrap ${
                    activeFiltersCount > 0 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50' 
                      : 'backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30'
                  }`}
                >
                  <SlidersHorizontal size={18} /> 
                  Filter {activeFiltersCount > 0 && <span className="ml-1 bg-white/20 px-1.5 py-0.5 rounded text-xs">{activeFiltersCount}</span>}
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all whitespace-nowrap ${
                      sortOption !== 'newest' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50' 
                        : 'backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30'
                    }`}
                  >
                    <ArrowUpDown size={18} /> 
                    Sortieren
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isSortOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)}></div>
                      <div className="absolute top-full right-0 md:left-0 mt-2 w-48 backdrop-blur-xl bg-black/90 rounded-xl shadow-2xl shadow-purple-500/20 border border-white/10 overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-left">
                        <div className="py-1">
                            {(['newest', 'popular', 'active'] as const).map((option) => (
                              <button
                                key={option}
                                onClick={() => {
                                  setSortOption(option);
                                  setIsSortOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-white/10 flex items-center justify-between group transition-colors"
                              >
                                <span className={sortOption === option ? 'text-purple-400 font-bold' : 'text-gray-300 group-hover:text-white'}>
                                  {sortLabels[option]}
                                </span>
                                {sortOption === option && <Check size={16} className="text-purple-400" />}
                              </button>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
             </div>

             {/* Divider */}
             <div className="h-8 w-px bg-white/10 hidden md:block shrink-0"></div>

             {/* Scrollable Categories - Separated to allow scrolling without clipping previous elements */}
             <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 md:pb-0 flex-1 md:flex-initial min-w-0">
                {CATEGORIES.slice(0, 4).map(cat => (
                   <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                      selectedCategory === cat 
                        ? 'bg-purple-500/20 text-purple-400 font-bold border border-purple-500/50 shadow-lg shadow-purple-500/20' 
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                   >
                     {cat}
                   </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Feed Grid */}
        <div>
          {filteredDeals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDeals.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 backdrop-blur-lg bg-white/5 rounded-3xl border border-dashed border-white/20">
              <div className="text-6xl mb-4">🤷‍♂️</div>
              <h3 className="text-xl font-bold text-white">Nichts gefunden.</h3>
              <p className="text-gray-400 mt-2">Versuch mal die Filter anzupassen oder einen anderen Suchbegriff.</p>
              <button 
                onClick={() => {setMaxPrice(1000); setSelectedCategory(Category.ALL); setSortOption('newest');}}
                className="mt-6 text-purple-400 font-bold hover:text-pink-400 hover:underline transition-colors"
              >
                Alle Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Filter Drawer (Sidebar Overlay) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsFilterOpen(false)}></div>
          
          <div className="relative w-full max-w-sm backdrop-blur-xl bg-black/90 h-full shadow-2xl shadow-purple-500/20 animate-in slide-in-from-right duration-300 flex flex-col border-l border-white/10">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <SlidersHorizontal size={20} /> Filter
              </h2>
              <button 
                onClick={() => setIsFilterOpen(false)} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider text-gray-400">Kategorie</h3>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                        selectedCategory === cat 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-[1.02]' 
                        : 'backdrop-blur-lg bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Slider */}
              <div>
                 <div className="flex justify-between items-end mb-4">
                   <h3 className="font-bold text-white text-sm uppercase tracking-wider text-gray-400">Maximaler Preis</h3>
                   <span className="font-black text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{maxPrice}€</span>
                 </div>
                 <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                 />
                 <div className="flex justify-between text-xs text-gray-500 mt-2">
                   <span>0€</span>
                   <span>1000€+</span>
                 </div>
              </div>

              {/* Info Box */}
              <div className="backdrop-blur-lg bg-blue-500/10 p-5 rounded-2xl border border-blue-500/30">
                <h4 className="font-bold text-sm mb-2 text-blue-300">Deal-Garantie 🛡️</h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Wir prüfen jeden Preis manuell. Keine Fake-Rabatte, keine China-Dropshipping Scams.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-black/50 backdrop-blur-sm">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
              >
                {filteredDeals.length} Deals anzeigen
              </button>
              <button 
                 onClick={() => {setMaxPrice(1000); setSelectedCategory(Category.ALL);}}
                 className="w-full text-center text-xs text-gray-400 mt-3 hover:text-purple-400 transition-colors"
              >
                 Filter zurücksetzen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealsFeed;