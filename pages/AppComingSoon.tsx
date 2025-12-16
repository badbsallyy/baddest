import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Construction, ArrowLeft } from 'lucide-react';

const AppComingSoon: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center py-20">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
        <Smartphone size={80} className="text-dark relative z-10" />
        <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg z-20">
            <Construction size={24} className="text-primary" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">
        Wir kochen noch... 👨‍🍳
      </h1>
      
      <p className="text-xl text-gray-500 max-w-md mb-10 leading-relaxed">
        Wir arbeiten noch an unserer App. Komm ein anderes Mal nochmal wieder!
      </p>

      <Link 
        to="/" 
        className="bg-dark text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
      >
        <ArrowLeft size={20} /> Zurück zu den Deals
      </Link>
    </div>
  );
};

export default AppComingSoon;