import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  const mainLinks = [
    { name: 'HOT🔥', path: '/deals?filter=hot' },
    { name: 'Deals', path: '/deals' },
  ];

  const moreLinks = [
    { name: 'Fashion', path: '/category/Fashion' },
    { name: 'Tech', path: '/category/Tech' },
    { name: 'Beauty', path: '/category/Beauty' },
    { name: 'Gaming', path: '/category/Gaming' },
    { name: 'Viral', path: '/category/Viral' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path.includes('?')) {
       return location.pathname + location.search === path;
    }
    return location.pathname === path;
  };

  const isMoreActive = moreLinks.some(link => isActive(link.path));

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/deals?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          
          {isSearchOpen ? (
            <div className="w-full flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-300 ease-out">
               <form onSubmit={handleSearchSubmit} className="flex-1 relative group">
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:bg-white focus-within:shadow-md focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-300">
                    <Search size={18} className="text-gray-400 mr-3 shrink-0 group-focus-within:text-primary transition-colors" />
                    <input 
                      autoFocus
                      type="text" 
                      placeholder="Suche nach Deals (z.B. Nike, PS5)..." 
                      className="flex-1 bg-transparent border-none outline-none text-base text-dark placeholder-gray-400 h-full w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
               </form>
               <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)} 
                className="p-2.5 bg-gray-50 text-gray-500 hover:text-dark hover:bg-gray-200 rounded-full transition-all shrink-0"
               >
                 <X size={20} />
               </button>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                   <div className="flex items-center font-serif font-black text-2xl leading-none select-none">
                      <span className="scale-x-[-1] translate-x-[1px]">B</span>
                      <span className="-translate-x-[1px]">B</span>
                   </div>
                </div>
                <span className="font-serif font-black text-3xl tracking-tight text-dark">
                  Baddest
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {mainLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium text-sm transition-colors ${
                      isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-dark'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative group">
                  <button 
                    className={`flex items-center gap-1 font-medium text-sm transition-colors py-2 outline-none ${
                      isMoreActive ? 'text-primary' : 'text-gray-600 hover:text-dark'
                    }`}
                  >
                    more <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200"/>
                  </button>
                  
                  <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {moreLinks.map(link => (
                        <Link 
                          key={link.name} 
                          to={link.path} 
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors ${
                             isActive(link.path) ? 'text-primary font-medium' : 'text-gray-600'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="hidden md:flex items-center gap-4">
                 <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-500 hover:text-primary hover:bg-gray-50 rounded-full transition-all"
                >
                  <Search size={20} />
                </button>
                <Link 
                  to="/app"
                  className="bg-dark text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-transform active:scale-95"
                >
                  App öffnen
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center gap-4">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-500 hover:text-dark"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-dark focus:outline-none"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && !isSearchOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                  isActive(link.path) 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Accordion for More */}
            <div>
              <button 
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold ${
                  isMoreActive ? 'text-primary' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>more</span>
                <ChevronDown size={20} className={`transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileMoreOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-3">
                  {moreLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                        isActive(link.path) 
                          ? 'text-primary' 
                          : 'text-gray-600 hover:text-dark'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <Link
                to="/app"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-bold bg-dark text-white text-center mb-2"
              >
                App öffnen
              </Link>
              <Link
                to="/transparency"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-500 hover:bg-gray-50"
              >
                Transparenz & Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;