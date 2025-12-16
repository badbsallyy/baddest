import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 pb-8 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center shrink-0">
                 <div className="flex items-center font-serif font-black text-lg leading-none select-none">
                    <span className="scale-x-[-1] translate-x-[0.5px]">B</span>
                    <span className="-translate-x-[0.5px]">B</span>
                 </div>
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-dark">
                Baddest
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Wir kuratieren die besten Deals aus Fashion, Tech & Lifestyle. Kein Spam, nur echte Rabatte für Gen Z.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {/* TikTok Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Deals</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/deals" className="hover:text-primary">Alle Deals</Link></li>
              <li><Link to="/category/Fashion" className="hover:text-primary">Fashion</Link></li>
              <li><Link to="/category/Tech" className="hover:text-primary">Tech</Link></li>
              <li><Link to="/category/Viral" className="hover:text-primary">Viral</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/blog" className="hover:text-primary">Blog & Guides</Link></li>
              <li><Link to="/transparency" className="hover:text-primary">Über uns</Link></li>
              <li><Link to="/transparency" className="hover:text-primary">Transparenz</Link></li>
              <li><Link to="#" className="hover:text-primary">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-primary">Impressum</Link></li>
              <li><Link to="#" className="hover:text-primary">Datenschutz</Link></li>
              <li><Link to="#" className="hover:text-primary">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Baddest. all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;