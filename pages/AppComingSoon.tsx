import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Construction, ArrowLeft } from 'lucide-react';

const AppComingSoon: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center py-20">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl p-8">
          <Smartphone size={80} className="text-white" />
        </div>
        <div className="absolute -bottom-2 -right-2 backdrop-blur-lg bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-2xl shadow-purple-500/50 z-20 border border-white/20">
            <Construction size={24} className="text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
        Wir kochen noch... 👨‍🍳
      </h1>
      
      <p className="text-xl text-gray-400 max-w-md mb-10 leading-relaxed">
        Wir arbeiten noch an unserer App. Komm ein anderes Mal nochmal wieder!
      </p>

      <Link 
        to="/" 
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} /> Zurück zu den Deals
      </Link>
    </div>
  );
};

export default AppComingSoon;