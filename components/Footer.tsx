import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 mt-12 pb-8 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/50">
                 <div className="flex items-center font-serif font-black text-lg leading-none select-none">
                    <span className="scale-x-[-1] translate-x-[0.5px]">B</span>
                    <span className="-translate-x-[0.5px]">B</span>
                 </div>
              </div>
              <span className="font-serif font-black text-2xl tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Baddest
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Wir kuratieren die besten Deals aus Fashion, Tech & Lifestyle. Kein Spam, nur echte Rabatte für Gen Z.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                {/* TikTok Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Deals</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/deals" className="hover:text-purple-400 transition-colors">Alle Deals</Link></li>
              <li><Link to="/category/Fashion" className="hover:text-purple-400 transition-colors">Fashion</Link></li>
              <li><Link to="/category/Tech" className="hover:text-purple-400 transition-colors">Tech</Link></li>
              <li><Link to="/category/Viral" className="hover:text-purple-400 transition-colors">Viral</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Blog & Guides</Link></li>
              <li><Link to="/transparency" className="hover:text-purple-400 transition-colors">Über uns</Link></li>
              <li><Link to="/transparency" className="hover:text-purple-400 transition-colors">Transparenz</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Impressum</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Datenschutz</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Baddest. all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;