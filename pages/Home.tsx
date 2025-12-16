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
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark tracking-tight mb-4">
          🔥 Die krassesten Deals <br className="hidden md:block"/> im Netz – <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">heute.</span>
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">
          Fashion, Tech & Stuff, der wirklich reduziert ist. Kein Spam, nur echte Rabatte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/deals" className="bg-primary text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
            Zu den Deals
          </Link>
          <Link to="/deals?filter=trending" className="bg-white text-dark border border-gray-200 font-bold py-3.5 px-8 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all">
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
              className="flex items-center gap-2 whitespace-nowrap bg-white border border-gray-200 px-4 py-3 rounded-xl hover:border-primary transition-colors min-w-max"
            >
              <div className={`p-1 rounded-md ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="font-semibold text-sm">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Deals */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Flame className="text-red-500" fill="currentColor" /> Trending Deals
            </h2>
            <p className="text-gray-500 text-sm mt-1">Was gerade alle kaufen.</p>
          </div>
          <Link to="/deals" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Alle sehen <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
        </div>
      </section>

      {/* Under 20 Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-12 -translate-y-12">
            <DollarSign size={300} />
          </div>
          <div className="relative z-10 mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold mb-2">Low Budget, High Quality</h2>
            <p className="text-emerald-50">Die besten Schnapper unter 20€. Gönn dir was Kleines.</p>
          </div>
          <div className="relative z-10">
             <Link to="/deals?maxPrice=20" className="bg-white text-emerald-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-emerald-50 transition-colors inline-block">
               Deals unter 20€
             </Link>
          </div>
        </div>
      </section>
      
       {/* New Deals */}
       <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold">🆕 Neu hinzugefügt</h2>
           <Link to="/deals" className="text-primary font-semibold text-sm hover:underline">
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
        <div className="bg-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-dark opacity-50"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-4">Keine Lust zu suchen?</h2>
             <p className="text-gray-300 mb-8 max-w-md mx-auto">
               Wir schicken dir nur die wirklich kranken Deals per Mail. Kein Spam, versprochen.
             </p>
             <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="deine@mail.com" 
                 className="flex-1 px-4 py-3 rounded-xl text-dark focus:outline-none focus:ring-2 focus:ring-primary"
               />
               <button className="bg-primary hover:bg-indigo-500 px-6 py-3 rounded-xl font-bold transition-colors">
                 Deal Alarm 🔔
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <Link key={post.id} to="/blog" className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;