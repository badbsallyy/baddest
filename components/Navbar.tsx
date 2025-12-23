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
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center">
          
          {isSearchOpen ? (
            <div className="w-full flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-300 ease-out">
               <form onSubmit={handleSearchSubmit} className="flex-1 relative group">
                  <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20 focus-within:bg-white/20 focus-within:shadow-lg focus-within:shadow-purple-500/20 focus-within:ring-2 focus-within:ring-purple-500/30 transition-all duration-300">
                    <Search size={18} className="text-gray-400 mr-3 shrink-0 group-focus-within:text-purple-400 transition-colors" />
                    <input 
                      autoFocus
                      type="text" 
                      placeholder="Suche nach Deals (z.B. Nike, PS5)..." 
                      className="flex-1 bg-transparent border-none outline-none text-base text-white placeholder-gray-400 h-full w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
               </form>
               <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)} 
                className="p-2.5 bg-white/10 backdrop-blur-lg text-gray-300 hover:text-white hover:bg-white/20 rounded-full transition-all shrink-0 border border-white/10"
               >
                 <X size={20} />
               </button>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/50 group-hover:scale-105 group-hover:shadow-purple-500/70 transition-all duration-300">
                   <div className="flex items-center font-serif font-black text-2xl leading-none select-none">
                      <span className="scale-x-[-1] translate-x-[1px]">B</span>
                      <span className="-translate-x-[1px]">B</span>
                   </div>
                </div>
                <span className="font-serif font-black text-3xl tracking-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Baddest
                </span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {mainLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium text-sm transition-all duration-300 ${
                      isActive(link.path) ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative group">
                  <button 
                    className={`flex items-center gap-1 font-medium text-sm transition-all duration-300 py-2 outline-none ${
                      isMoreActive ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    more <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200"/>
                  </button>
                  
                  <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                    <div className="bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl shadow-purple-500/20 border border-white/10 overflow-hidden py-2">
                      {moreLinks.map(link => (
                        <Link 
                          key={link.name} 
                          to={link.path} 
                          className={`block px-4 py-2 text-sm hover:bg-white/10 hover:text-purple-400 transition-colors ${
                             isActive(link.path) ? 'text-purple-400 font-medium' : 'text-gray-300'
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
                  className="p-2 text-gray-300 hover:text-purple-400 hover:bg-white/10 rounded-full transition-all"
                >
                  <Search size={20} />
                </button>
                <Link 
                  to="/app"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
                >
                  App öffnen
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center gap-4">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-300 hover:text-white"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-white focus:outline-none"
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
        <div className="md:hidden absolute w-full bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/20 animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/20' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
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
                  isMoreActive ? 'text-purple-400' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>more</span>
                <ChevronDown size={20} className={`transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileMoreOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-white/10 ml-3">
                  {moreLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                        isActive(link.path) 
                          ? 'text-purple-400' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 mt-4">
              <Link
                to="/app"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-center mb-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all"
              >
                App öffnen
              </Link>
              <Link
                to="/transparency"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-400 hover:bg-white/10 hover:text-white"
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