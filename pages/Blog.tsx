import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-dark text-white py-16 px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Guides & Stories</h1>
           <p className="text-gray-400 text-lg">Kein Blabla. Nur Tipps, wie du mehr für dein Geld bekommst.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className={`${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'} font-bold text-white mb-2`}>
                    {post.title}
                  </h2>
                  {index === 0 && <p className="text-gray-200 md:w-2/3 hidden md:block">{post.excerpt}</p>}
                </div>
              </div>
              <div className="p-6 md:p-8">
                 {index !== 0 && <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>}
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-gray-400">{post.date}</span>
                   <button className="font-bold text-dark group-hover:text-primary flex items-center gap-2 transition-colors">
                     Lesen <ArrowRight size={18} />
                   </button>
                 </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;