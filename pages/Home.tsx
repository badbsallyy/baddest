import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, ShoppingBag, Smartphone, Gamepad2, Sparkles, DollarSign } from 'lucide-react';
import { MOCK_DEALS, BLOG_POSTS } from '../constants';
import DealCard from '../components/DealCard';

const Home: React.FC = () => {
  const hotDeals = MOCK_DEALS.filter(d => d.isHot).slice(0, 4);
  const under20Deals = MOCK_DEALS.filter(d => d.priceNew < 20).slice(0, 4);
  const newDeals = MOCK_DEALS.filter(d => d.isNew).slice(0, 4);

  const categories = [
    { name: 'Fashion', icon: <ShoppingBag size={20} />, color: 'bg-pink-100 text-pink-600' },
    { name: 'Tech', icon: <Smartphone size={20} />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Gaming', icon: <Gamepad2 size={20} />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Viral', icon: <Sparkles size={20} />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Under 20€', icon: <DollarSign size={20} />, color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          🔥 Die krassesten Deals <br className="hidden md:block"/> im Netz – <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">heute.</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          Fashion, Tech & Stuff, der wirklich reduziert ist. Kein Spam, nur echte Rabatte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/deals" className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300">
            Zu den Deals
          </Link>
          <Link to="/deals?filter=trending" className="backdrop-blur-lg bg-white/10 text-white border border-white/20 font-bold py-3.5 px-8 rounded-full hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            Trending Sales
          </Link>
        </div>
      </section>

      {/* Category Quick Access */}
      <section className="px-4 mb-12">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar max-w-7xl mx-auto md:justify-center">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={`/category/${cat.name.replace(' ', '')}`}
              className="flex items-center gap-2 whitespace-nowrap backdrop-blur-lg bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:border-purple-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 min-w-max"
            >
              <div className={`p-1 rounded-md ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="font-semibold text-sm text-white">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Deals */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Flame className="text-red-500" fill="currentColor" /> Trending Deals
            </h2>
            <p className="text-gray-400 text-sm mt-1">Was gerade alle kaufen.</p>
          </div>
          <Link to="/deals" className="text-purple-400 font-semibold text-sm flex items-center gap-1 hover:gap-2 hover:text-pink-400 transition-all">
            Alle sehen <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
        </div>
      </section>

      {/* Under 20 Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-emerald-500/30 relative overflow-hidden backdrop-blur-lg border border-white/20">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-12">
            <DollarSign size={300} />
          </div>
          <div className="relative z-10 mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold mb-2">Low Budget, High Quality</h2>
            <p className="text-emerald-50">Die besten Schnapper unter 20€. Gönn dir was Kleines.</p>
          </div>
          <div className="relative z-10">
             <Link to="/deals?maxPrice=20" className="bg-white text-emerald-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
               Deals unter 20€
             </Link>
          </div>
        </div>
      </section>
      
       {/* New Deals */}
       <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-white">🆕 Neu hinzugefügt</h2>
           <Link to="/deals" className="text-purple-400 font-semibold text-sm hover:text-pink-400 hover:underline transition-colors">
            Alle anzeigen
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
          {under20Deals.slice(0,2).map(deal => <DealCard key={`u-${deal.id}`} deal={deal} />)}
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="max-w-3xl mx-auto px-4 mb-16 text-center">
        <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/30">
           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-50"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">Keine Lust zu suchen?</h2>
             <p className="text-gray-300 mb-8 max-w-md mx-auto">
               Wir schicken dir nur die wirklich kranken Deals per Mail. Kein Spam, versprochen.
             </p>
             <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="deine@mail.com" 
                 className="flex-1 px-4 py-3 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/20 transition-all"
               />
               <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-bold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300">
                 Deal Alarm 🔔
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-white">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.id} to="/blog" className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/10">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute bottom-2 left-2 backdrop-blur-lg bg-black/60 text-white text-xs px-2 py-1 rounded border border-white/20">
                  {post.category}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">{post.title}</h3>
              <p className="text-gray-400 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;