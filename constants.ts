import { Category, Deal, BlogPost } from './types';

export const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Noise Cancelling',
    shopName: 'Amazon',
    image: 'https://picsum.photos/id/1/800/800', // Tech placeholder
    priceOld: 419,
    priceNew: 299,
    discountPercentage: 28,
    category: Category.TECH,
    isHot: true,
    highlights: ['Bestes ANC auf dem Markt', '30h Akkulaufzeit', 'Ultra bequem'],
    link: '#',
    description: 'Der aktuelle König der Noise-Cancelling Kopfhörer ist endlich unter 300€ gefallen. Perfekt für Uni, Bus & Bahn.'
  },
  {
    id: '2',
    title: 'Nike Dunk Low Retro Panda',
    shopName: 'Nike Store',
    image: 'https://picsum.photos/id/103/800/800', // Shoe/Fashion placeholder
    priceOld: 119,
    priceNew: 89,
    discountPercentage: 25,
    category: Category.FASHION,
    isNew: true,
    highlights: ['Klassiker Colorway', 'Verfügbar in fast allen Größen', 'Kostenloser Versand'],
    link: '#',
    description: 'Der Sneaker, den jeder haben will. Endlich wieder im Restock und direkt reduziert.'
  },
  {
    id: '3',
    title: 'Dyson Airwrap Complete Long',
    shopName: 'MediaMarkt',
    image: 'https://picsum.photos/id/21/800/800', // Beauty placeholder
    priceOld: 599,
    priceNew: 449,
    discountPercentage: 25,
    category: Category.BEAUTY,
    isHot: true,
    highlights: ['Inkl. Reisetasche', 'Neue Version', 'Schont die Haare'],
    link: '#',
    description: 'Der Heilige Gral des Haar-Stylings. Selten so stark reduziert.'
  },
  {
    id: '4',
    title: 'PlayStation 5 Slim Disc Edition',
    shopName: 'Saturn',
    image: 'https://picsum.photos/id/96/800/800', // Gaming placeholder
    priceOld: 549,
    priceNew: 449,
    discountPercentage: 18,
    category: Category.GAMING,
    highlights: ['1TB Speicher', 'Inkl. Controller', 'Sofort lieferbar'],
    link: '#',
    description: 'Die Slim Version ist kleiner, leichter und hat mehr Speicher. Top Preis!'
  },
  {
    id: '5',
    title: 'Stanley Quencher H2.0 Tumbler',
    shopName: 'Urban Outfitters',
    image: 'https://picsum.photos/id/75/800/800', // Viral placeholder
    priceOld: 55,
    priceNew: 35,
    discountPercentage: 36,
    category: Category.VIRAL,
    isNew: true,
    highlights: ['Hält 2 Tage kalt', 'Passt in Auto-Halterung', 'Viral auf TikTok'],
    link: '#',
    description: 'Der Becher, den ganz TikTok feiert. Jetzt in neuen Farben reduziert.'
  },
  {
    id: '6',
    title: 'Vintage Oversized Hoodie',
    shopName: 'H&M',
    image: 'https://picsum.photos/id/91/800/800', // Fashion placeholder
    priceOld: 39.99,
    priceNew: 19.99,
    discountPercentage: 50,
    category: Category.FASHION,
    highlights: ['100% Baumwolle', 'Heavy Weight Stoff', 'Boxy Fit'],
    link: '#',
    description: 'Perfekter Basic Hoodie für den Herbst. Der Fit ist 10/10.'
  },
  {
    id: '7',
    title: 'MacBook Air M2 13 Zoll',
    shopName: 'Cyberport',
    image: 'https://picsum.photos/id/4/800/800', // Tech placeholder
    priceOld: 1199,
    priceNew: 999,
    discountPercentage: 16,
    category: Category.TECH,
    highlights: ['M2 Chip', 'Midnight Blue', 'Silent (kein Lüfter)'],
    link: '#',
    description: 'Das beste Laptop für Studenten. Leicht, schnell und der Akku hält ewig.'
  },
  {
    id: '8',
    title: 'LED Sunset Lamp',
    shopName: 'Amazon',
    image: 'https://picsum.photos/id/56/800/800', // Viral/Home placeholder
    priceOld: 25,
    priceNew: 12,
    discountPercentage: 52,
    category: Category.HOME,
    highlights: ['App steuerbar', '16 Mio Farben', 'USB Powered'],
    link: '#',
    description: 'Macht extrem gemütliches Licht im Zimmer. Für den Preis ein No-Brainer.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '🔥 Die besten Sneaker-Deals diese Woche',
    excerpt: 'Nike, Adidas und New Balance hauen gerade richtig raus. Wir haben die Hidden Gems gefunden.',
    image: 'https://picsum.photos/id/103/600/400',
    date: '12. Okt',
    category: 'Fashion'
  },
  {
    id: '2',
    title: 'Top Amazon Deals unter 30 €',
    excerpt: 'Kleine Gadgets, die dein Leben besser machen, ohne den Geldbeutel zu killen.',
    image: 'https://picsum.photos/id/366/600/400',
    date: '10. Okt',
    category: 'Tech'
  },
  {
    id: '3',
    title: 'Black Friday: Was lohnt sich wirklich?',
    excerpt: 'Nicht alles ist ein Deal. Hier ist unser Guide, um nicht gescammt zu werden.',
    image: 'https://picsum.photos/id/201/600/400',
    date: '08. Okt',
    category: 'Guide'
  }
];

export const CATEGORIES = Object.values(Category);