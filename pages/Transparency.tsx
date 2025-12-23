import React from 'react';
import { ShieldCheck, Heart, DollarSign, Search } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 text-center">Kein Bullshit. <br/>Nur Deals.</h1>
        <p className="text-xl text-gray-400 text-center mb-16 leading-relaxed">
          Wir wissen, dass das Internet voll von Fake-Rabatten und Scam-Shops ist. <br className="hidden md:block"/>
          Hier erklären wir dir, wie Baddest funktioniert und wie wir unser Geld verdienen.
        </p>

        <div className="space-y-12">
          
          <section className="flex gap-6 md:gap-8 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-lg bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
              <Search size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Wie wir Deals auswählen</h3>
              <p className="text-gray-400 leading-relaxed">
                Wir nutzen keine automatisierten Bots, die kaputte Links posten. Unser Team (echte Menschen!) durchsucht täglich Shops wie Amazon, Nike, MediaMarkt und Co. Wir vergleichen die Preise mit dem Marktverlauf der letzten 3 Monate. Wenn ein "50% Rabatt" eigentlich nur 5% günstiger ist als der Durchschnittspreis, posten wir ihn nicht.
              </p>
            </div>
          </section>

          <section className="flex gap-6 md:gap-8 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-lg bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 shrink-0">
              <DollarSign size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Affiliate Links & Money</h3>
              <p className="text-gray-400 leading-relaxed">
                Ja, wir verdienen Geld, wenn du über unsere Links kaufst. Das nennt man Affiliate-Marketing. <br/><br/>
                <strong className="text-white">Wichtig:</strong> Für dich wird das Produkt dadurch <span className="underline decoration-green-500 decoration-4">nicht einen Cent teurer</span>. Die Provision zahlt der Shop aus seiner Marketing-Tasche. Das ermöglicht es uns, diese Seite kostenlos und werbefrei (bis auf die Deals selbst) zu betreiben.
              </p>
            </div>
          </section>

          <section className="flex gap-6 md:gap-8 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-lg bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Anti-Scam Policy</h3>
              <p className="text-gray-400 leading-relaxed">
                Wir listen nur Shops, bei denen wir auch selbst bestellen würden. Kein Dropshipping-Schrott, keine Fake-Shops ohne Impressum. Wenn wir Zweifel an der Seriösität eines Händlers haben, kommt der Deal nicht auf die Seite. Egal wie günstig er ist.
              </p>
            </div>
          </section>

           <section className="flex gap-6 md:gap-8 items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 backdrop-blur-lg bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-400 shrink-0">
              <Heart size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Community First</h3>
              <p className="text-gray-400 leading-relaxed">
                Baddest ist für euch gebaut. Wenn ihr einen Deal seht, der abgelaufen ist oder nicht stimmt, schreibt uns. Wir fixen das sofort.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Transparency;