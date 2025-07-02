import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useCart } from './context/CartContext';
import { useWishlist } from './context/WishlistContext';
// 200ml

import CarPerfume from './assets/200ml/car-perfume.png'
import DashboardPolish from './assets/200ml/Dashboard-polish.png'
import TyrePolish from './assets/200ml/Tyre-polish.png'
import CarwashShampoo from './assets/200ml/car-wash-shampoo.png'

// new images
import DryCleanShampoo from './assets/200ml/dry clean shampoo.png';
import GlassCleaner from './assets/200ml/Glass cleaner.png';
import GlassDeffoger from './assets/200ml/Glass deffoger.png';
import WiperWasherShampoo from './assets/200ml/wiper washer shampoo.png';

// Quantity wise images
// 100ml
import DryCleanShampoo100ml from './assets/100ml/Dry-clean-shampoo.png';
import CarwashShampoo100ml from './assets/100ml/Car-wash.png';
import GlassCleaner100ml from './assets/100ml/Glass-cleaner.png';
import GlassDeffoger100ml from './assets/100ml/Glass-deffoger.png';
import WiperWasherShampoo100ml from './assets/100ml/Wiper-washer-shampoo.png';
import DashboardPolish100ml from './assets/100ml/Dashboard polish.png';
import CarPerfume100ml from './assets/100ml/Car perfume.png';
import TyrePolish100ml from './assets/100ml/Tyre polish.png';

// 30ml
import CarPerfume30ml from './assets/30ml/car perfume.png';
import TyrePolish30ml from './assets/30ml/Tyre polish.png';
import DashboardPolish30ml from './assets/30ml/Dashboard polish.png';
import DryCleanShampoo30ml from './assets/30ml/Dry clean Shampoo.png';
import GlassCleaner30ml from './assets/30ml/glass cleaner.png';
import GlassDeffoger30ml from './assets/30ml/glass defogger.png';
import GlassWashShampoo30ml from './assets/30ml/glass wash shampoo.png';
import WiperWasherShampoo30ml from './assets/30ml/wiper washer shampoo.png';

// 200ml


// 500ml
import DryCleanShampoo500ml from './assets/500ml/Dry clean Shampoo.png';
import CarwashShampoo500ml from './assets/500ml/Car wash shampoo.png';
import GlassCleaner500ml from './assets/500ml/Glass cleaner.png';
import GlassDeffoger500ml from './assets/500ml/Glass-deffoger.png';
import WiperWasherShampoo500ml from './assets/500ml/Wiper washer shampoo.png';
import CarPerfume500ml from './assets/500ml/Car perfume.png'
import DashboardPolish500ml from './assets/500ml/Dashboard polish.png'
import TyrePolish500ml from './assets/500ml/Tyre polish.png'


// 5l
import DryCleanShampoo5L from './assets/5L/Dry-clean-Shampoo-b.png';
import CarwashShampoo5L from './assets/5L/Car-wash-shampoo-b.png';
import GlassCleaner5L from './assets/5L/Glass-cleaner-b.png';
import GlassDeffoger5L from './assets/5L/Glass-deffoger.png';
import WiperWasherShampoo5L from './assets/5L/wiper-washer-shampoo-b.png';
import CarPerfume5L from './assets/5L/Car-perfume-b.png'
import DashboardPolish5L from './assets/5L/Dashboard-polish-b.png'
import TyrePolish5L from './assets/5L/Tyre-polish-b.png'
import Dashboard from './assets/5l/Dashboard.png'
import DryClean from './assets/5l/Dry clean.png'












function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// This would typically come from an API or database
const products = {
  'car-perfume': {
    name: 'Car Perfume',
    price: '₹ 225.00',
    description: 'Enhance your driving experience with a touch of luxury and experience a beautiful aromatic journey. .',
    category: 'CAR CARE',
    rating: 4.5,
     variants: [
      { volume: '30ml', price: '₹ 90', stock: 5, image: CarPerfume30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: CarPerfume100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: CarPerfume },
      { volume: '500ml', price: '₹ 949', stock: 5, image: CarPerfume500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: CarPerfume5L },
      
      
    ],
    benefits: [
      'Enhanced mood',
      'Eliminates odors',
      'Freshness',
      'Personalization',
      'Fresh and pleasant scent',
      'Long lasting',
      'Fits in well',
      'Affordable price'
    ],
    howToUse: [
      {
        title: 'Step 1',
        description: 'Remove the cap from the car perfume bottle.'
      },
      {
        title: 'Step 2',
        description: 'Place the perfume in your car\'s cup holder or attach it to the air vent.'
      },
      {
        title: 'Step 3',
        description: 'Adjust the intensity by rotating the cap if available.'
      }
    ],
    keyIngredients: [
      'Fragrance oils: Provide long-lasting pleasant scent',
      'Solvent: Dissolves fragrance oils for easy application',
      'Stabilizers: Prevents the fragnance freom fading or changing ovetime.',
      
    ],
    image: CarPerfume,
    stock: 50,
    reviews: 128
  },
  'tyre-polish': {
    name: 'Tyre Polish',
    price: '₹ 90.00',
    description: 'Professional tyre polish that gives your car tyres a deep, rich shine while protecting them from UV damage.',
    category: 'CAR CARE',
    rating: 4.3,
     variants: [
      { volume: '30ml', price: '₹ 90', stock: 5, image: TyrePolish30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: TyrePolish100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: TyrePolish },
      { volume: '500ml', price: '₹ 949', stock: 5, image: TyrePolish500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: TyrePolish5L },
      
    ],
    benefits: [
      'UV protection',
      'Long-lasting shine',
      'Fast drying formula',
      'Water-resistant',
      'Restores tyre color',
      'Prevents cracking',
      'Enhances appearance',
      'Durable finish'
    ],
    howToUse: [
      {
        title: 'Step 1',
        description: 'Clean the tyres thoroughly with water and let them dry.'
      },
      {
        title: 'Step 2',
        description: 'Apply the tyre polish evenly using a clean cloth or applicator.'
      },
      {
        title: 'Step 3',
        description: 'Allow the polish to dry for a few minutes.'
      },
      {
        title: 'Step 4',
        description: 'Buff the tyres with a clean cloth for maximum shine.'
      }
    ],
    keyIngredients: [
      'Silicone polymers: Provide long-lasting shine',
      'Solvents: Help to dissolve the silocone and make it easier to apply.',
      'Emulsifiers: These helps to keep the silicone and make it easier to apply.',
      'Fragnances: These are added to make the polish smeell nice.'
    ],
    image: TyrePolish,
    stock: 75,
    reviews: 95
  },
  'car-wash-shampoo': {
    name: 'Car Wash Shampoo',
    price: '₹ 140.00',
    description: 'Forever shine brings the most affordable and usable product for your car to keep it clean, shiny and new every time. Whether you are planning a drive or just in a mood to give your car a spa day, Forever Shine Car wash shampoo is exactly what you need.',
    category: 'CAR CARE',
    rating: 0,
     variants: [
      { volume: '30ml', price: '₹ 90', stock: 5 },
      { volume: '100ml', price: '₹ 199', stock: 20, image: CarwashShampoo100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: CarwashShampoo },
      { volume: '500ml', price: '₹ 949', stock: 5, image: CarwashShampoo500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: CarwashShampoo5L },
      
    ],
    benefits: [
      'Gentle cleaning',
      'Enhanced shine',
      'Protection from UV rays',
      'Long lasting results',
      'Anti-static',
      'Easy to apply',
      'Easy to carry',
      'Affordable price',
      'Eco friendly option'
    ],
    howToUse: [
      {
        title: 'Step 1',
        description: 'Rinse your car thoroughly with water to remove loose dirt and debris.'
      },
      {
        title: 'Step 2',
        description: 'Mix the shampoo with water according to the instructions on the bottle.'
      },
      {
        title: 'Step 3',
        description: 'Apply the soapy mixture to your car\'s surface using a wash mitt or sponge, working in circular motions and starting from the top.'
      },
      {
        title: 'Step 4',
        description: 'Rinse your car thoroughly with clean water to remove all traces of soap.'
      },
      {
        title: 'Step 5',
        description: 'Dry your car using a microfiber towel or chamois to prevent water spots.'
      }
    ],
    keyIngredients: [
      'Surfactants: They break down dirt, grease, and grime, allowing them to be easily rinsed away.',
      'Water: Acts as a solvent and carrier for the other ingredients.',
      'pH adjusters: Help to maintain the proper pH balance of the shampoo, making it safe for car paint.',
      'Lubricants: Help to reduce friction between the wash mitt and the car\'s surface, preventing scratches.',
      'Gloss enhancers: Add shine and protection to the car\'s paint.',
      'Fragrance: Added for a pleasant scent.'
    ],
    image: CarwashShampoo,
    stock: 60,
    reviews: 0
  },
  'dash-board-polish': {
    name: 'Dash-Board Polish',
    price: '₹ 90.00',
    description: 'Professional dashboard polish that restores and protects your car\'s interior surfaces.',
    category: 'CAR CARE',
    rating: 4.6,
     variants: [
       { volume: '30ml', price: '₹ 90', stock: 5, image: DashboardPolish30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: DashboardPolish100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: DashboardPolish },
      { volume: '500ml', price: '₹ 949', stock: 5, image: DashboardPolish500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: DashboardPolish5L },
    ],
    benefits: [
      'Subtle fragnance',
      'Shiny Dashboard',
      'Clean Inetriors',
      'Dust-free front',
      'Long-lasting protection',
      'Smell free car',
      'Quick Dry',
      'Natural finish'
    ],
    howToUse: [
      {
        title: 'Step 1',
        description: 'Clean the dashboard surface with a microfiber cloth to remove dust.'
      },
      {
        title: 'Step 2',
        description: 'Apply a small amount of polish to a clean cloth.'
      },
      {
        title: 'Step 3',
        description: 'Work the polish into the dashboard surface using circular motions.'
      },
      {
        title: 'Step 4',
        description: 'Buff the surface with a clean cloth for a perfect shine.'
      }
    ],
    keyIngredients: [
      'Surfactants: They Break down dirt, grease and grime, allowing them to be easily rinsed away.',
      'Water: Acts as a solvent and carrier for the other ingredients.',
    ],
    image: DashboardPolish,
    stock: 45,
    reviews: 89
  },
  
  // new product details
  'dry-clean-shampoo': {
  name: 'Dry Clean Shampoo',
  price: '₹ 199.00',
  description: 'Waterless dry clean shampoo for effective car surface cleaning without the need for water. Quick and easy cleaning solution.',
  category: 'CAR CARE',
  rating: 4.4,
   variants: [
    { volume: '30ml', price: '₹ 90', stock: 5, image: DryCleanShampoo30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: DryCleanShampoo100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: DryCleanShampoo },
      { volume: '500ml', price: '₹ 949', stock: 5, image: DryCleanShampoo500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: DryCleanShampoo5L },
      
    ],
  benefits: [
    'Waterless cleaning solution',
    'Cleans dust, dirt, and stains',
    'Safe on all car surfaces',
    'Leaves no residue',
    'Quick-drying formula',
    'Eco-friendly',
    'Easy to use anytime, anywhere',
    'Affordable price'
  ],
  howToUse: [
    {
      title: 'Step 1',
      description: 'Shake the bottle well before use.'
    },
    {
      title: 'Step 2',
      description: 'Spray evenly on the dirty surface.'
    },
    {
      title: 'Step 3',
      description: 'Wipe with a clean microfiber cloth.'
    }
  ],
  keyIngredients: [
    'Cleaning agents: Remove dirt and grime',
    'Conditioners: Protect surface shine',
    'Fragrance: Leaves a fresh smell',
    'Eco-safe solvents: Quick-drying effect'
  ],
  image: DryCleanShampoo,
  stock: 35,
  reviews: 94
},

'glass-cleaner': {
  name: 'Glass Cleaner',
  price: '₹ 145.00',
  description: 'Crystal-clear glass cleaner that removes smudges, dust, and grime from car windows and mirrors for perfect visibility.',
  category: 'CAR CARE',
  rating: 4.6,
   variants: [
    { volume: '30ml', price: '₹ 90', stock: 5, image: GlassCleaner30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: GlassCleaner100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: GlassCleaner },
      { volume: '500ml', price: '₹ 949', stock: 5, image: GlassCleaner500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: GlassCleaner5L },
      
    ],
  benefits: [
   'Crystal clear visibility',
' Safety check',
'Better driving experience',
'Protects against defogging and moisture/condensation',
 'Long lasting effect',
 'Multi glass usage',
 'Easy to apply',
 'Easy to carry',
 'Affordable price',
  'Eco-friendly formula',
  'Spray nozzle'

  ],
  howToUse: [
    {
      title: 'Step 1',
      description: 'first wipe your glasses or screen with a dry microfiber cloth to remove any loose dirt.'
    },
    {
      title: 'Step 2',
      description: 'spray the solution onto the cloth (not directly on the lenses) and gently wipe the lenses or screen in circular motions.'
    },
    {
      title: 'Step 3',
      description: 'use a dry part of the cloth for a streak-free finish. Repeat the process if required.'
    }
  ],
  keyIngredients: [
   ' Water: The main ingredient, used as a solvent and carrier.',
'Ammonia: A powerful agent that eradicates through dirt and grease',

'Surfactants: Help to break down dirt and grease, making it easier to remove',
'Fragrance: Added for a pleasant scent.',
  ],
  image: GlassCleaner,
  stock: 60,
  reviews: 112
},

'glass-deffoger': {
  name: 'Glass Deffoger',
  price: '₹ 165.00',
  description: ' Forever shine brings the most affordable and usable product for your car to keep all your glasses, mirrors and lenses fost free. Our Glass Deffoger cute through moisture and keeps your windows sparkling clear.',
  category: 'CAR CARE',
  rating: 4.3,
   variants: [
    { volume: '30ml', price: '₹ 90', stock: 5, image: GlassDeffoger30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: GlassDeffoger100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: GlassDeffoger },
      { volume: '500ml', price: '₹ 949', stock: 5, image: GlassDeffoger500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: GlassDeffoger5L },
      
    ],
  benefits: [
     'Crystal clear visibility',
' Safety check',
'Better driving experience',
'Protects against defogging and moisture/condensation',
 'Long lasting effect',
 'Multi glass usage',
 'Easy to apply',
 'Easy to carry',
 'Affordable price',
  'Eco-friendly formula',
  'Spray nozzle'
  ],
  howToUse: [
    {
      title: 'Step 1',
      description: 'Clean the glass surface before application.'
    },
    {
      title: 'Step 2',
      description: 'Spray a small amount on the surface.'
    },
    {
      title: 'Step 3',
      description: 'Wipe evenly with a dry cloth.'
    }
  ],
  keyIngredients: [
    'Anti-fog agents: Prevent condensation',
    'Alcohol base: Ensures quick drying',
    'Surfactants: Even coating on glass',
    'Water repellent: Maintains clear view'
  ],
  image: GlassDeffoger,
  stock: 40,
  reviews: 77
},

'wiper-washer-shampoo': {
  name: 'Wiper Washer Shampoo',
  price: '₹ 120.00',
  description: 'Our product is especially created to keep your car glass pane and wipers dust free.',
  category: 'CAR CARE',
  rating: 4.4,
   variants: [
    { volume: '30ml', price: '₹ 90', stock: 5, image: WiperWasherShampoo30ml },
      { volume: '100ml', price: '₹ 199', stock: 20, image: WiperWasherShampoo100ml },
      { volume: '200ml', price: '₹ 749', stock: 10, image: WiperWasherShampoo },
      { volume: '500ml', price: '₹ 949', stock: 5, image: WiperWasherShampoo500ml },
      { volume: '5L', price: '₹ 1599', stock: 5, image: WiperWasherShampoo5L },
      
    ],
  benefits: [
    'Protection',
    'Improved visibility',
    'Long Lasting wiper life',
    'Smooth wiping',
    'Clear/scratch-free windshield',
    'Super Convenient',
    'Quick and easy to use',
    'No damage or scratches',
    'Affordable price',
    'Shiny wipers'
  ],
  howToUse: [
    {
      title: 'Step 1',
      description: 'Store in a special container under the hood called a reservoir.'
    },
    {
      title: 'Step 2',
      description: 'Press the button on your steering wheel to activate the wipers and spray the washer fluid onto the windshield.'
    },
    {
      title: 'Step 3',
      description: 'The wipers automatically wipe the windshield to remove dirt and shampoo.'
    }
  ],
  keyIngredients: [
    'Surfactants: This helps to break down dirt, grime and grease ',
    'Solvents: These help to dissolve and remove contaminants.',
    'Water: This is the primarysolvent and helps to dilute other ingredients.',
    'Fragnances: Added to give it a good smell.'
  ],
  image: WiperWasherShampoo,
  stock: 45,
  reviews: 88
},
// 30ml new product
'glass-wash-shampoo': {
  name: 'Glasswash Shampoo',
  price: '₹ 249.00',
  description: 'Premium glasswash shampoo that provides a crystal-clear finish and removes tough dirt, grime, and water stains from your vehicle\'s windows and mirrors.',
  category: 'CAR CARE',
  rating: 4.7,
  variants: [
    { volume: '30ml', price: '₹ 90', stock: 12, image: GlassWashShampoo30ml },
    { volume: '500ml', price: '₹ 299', stock: 8 },
  ],
  benefits: [
    'Removes dirt, grease, and water stains',
    'Provides crystal-clear finish',
    'Streak-free cleaning formula',
    'Safe on tinted glass',
    'Easy rinse with no residue',
    'Concentrated formula for long-term use',
    'Gentle on surfaces',
    'Ideal for both cars and household glass surfaces'
  ],
  howToUse: [
    {
      title: 'Step 1',
      description: 'Dilute the shampoo with water as per instructions on the bottle.'
    },
    {
      title: 'Step 2',
      description: 'Apply the solution using a microfiber cloth or sponge over glass surfaces.'
    },
    {
      title: 'Step 3',
      description: 'Rinse thoroughly with clean water and wipe dry for a streak-free shine.'
    }
  ],
  keyIngredients: [
    'Surfactants: Help lift and remove dirt',
    'Water softeners: Prevent mineral deposits',
    'Anti-fog agents: Improve clarity',
    'pH balanced agents: Safe on all glass types'
  ],
  image: GlassWashShampoo30ml,
  stock: 10,
  reviews: 87
},


};

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const product = products[productId];

  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isTouchZoomActive, setIsTouchZoomActive] = useState(false);
  const imgRef = useRef(null);

  // Reviews state
  const [reviews, setReviews] = useState(() => {
    // Generate at least 7 demo reviews with random star ratings and placeholder text
    const demoReviews = [];
    const reviewTexts = [
      "Excellent product, highly recommend!",
      "Good value for the price.",
      "Works as expected, satisfied with the purchase.",
      "Quality could be better, but overall okay.",
      "Five stars! Will buy again.",
      "Not what I expected, but still decent.",
      "Amazing! Exceeded my expectations."
    ];
    const randomNames = [
      "Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"
    ];
    for (let i = 0; i < 7; i++) {
      demoReviews.push({
        id: i + 1,
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        rating: Math.floor(Math.random() * 5) + 1,
        content: reviewTexts[i % reviewTexts.length]
      });
    }
    return demoReviews;
  });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewContent, setNewReviewContent] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReviewName.trim() === '' || newReviewRating === 0 || newReviewContent.trim() === '') {
      alert('Please fill in all review fields.');
      return;
    }
    const newReview = {
      id: reviews.length + 1,
      name: newReviewName,
      rating: newReviewRating,
      content: newReviewContent
    };
    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
    setNewReviewName('');
    setNewReviewRating(0);
    setNewReviewContent('');
  };

  const getEventPosition = (e) => {
    if (e.touches && e.touches.length > 0) {
      return { x: e.touches[0].pageX, y: e.touches[0].pageY };
    }
    return { x: e.pageX, y: e.pageY };
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const pos = getEventPosition(e);
    const x = pos.x - left - window.pageXOffset;
    const y = pos.y - top - window.pageYOffset;

    // Clamp x and y within the image bounds
    const clampedX = Math.max(0, Math.min(x, width));
    const clampedY = Math.max(0, Math.min(y, height));

    setZoomPosition({ x: clampedX, y: clampedY });
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    addToCart({
      id: productId,
      name: product.name,
      price: selectedVariant.price,
      image: product.image,
      category: product.category
    }, quantity);

    // Show success animation
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

   const [selectedVariant, setSelectedVariant] = useState(product.variant?.[0] || null);


  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative md:sticky md:top-32 self-start mt-4 h-fit">
          <div
            className="bg-white rounded-2xl shadow-xl p-4 relative overflow-hidden"
            onMouseEnter={() => setZoomVisible(true)}
            onMouseLeave={() => {
              setZoomVisible(false);
              setIsTouchZoomActive(false);
            }}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
              e.preventDefault();
              setZoomVisible(true);
              setIsTouchZoomActive(true);
              handleMouseMove(e);
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              if (!isTouchZoomActive) {
                setZoomVisible(true);
                setIsTouchZoomActive(true);
              }
              handleMouseMove(e);
            }}
            onTouchEnd={() => {
              setZoomVisible(false);
              setIsTouchZoomActive(false);
            }}
            style={{ cursor: 'zoom-in' }}
          >
            <img
              ref={imgRef}
              src={selectedVariant?.image || product.image}
              alt={product.name}
              className="w-full md:w-[700px] h-[500px] object-contain"
            />
            {zoomVisible && (
              <div
                className="absolute border border-gray-300 rounded-lg shadow-lg"
                style={{
                  width: '150px',
                  height: '150px',
                  top: zoomPosition.y - 75,
                  left: zoomPosition.x - 75,
                  backgroundImage: `url(${selectedVariant?.image || product.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${imgRef.current.width * 2}px ${imgRef.current.height * 2}px`,
                  backgroundPosition: `-${zoomPosition.x * 2 - 75}px -${zoomPosition.y * 2 - 75}px`,
                  pointerEvents: 'none',
                  zIndex: 50,
                }}
              />
            )}
            <div className="absolute top-4 right-12 flex gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.name,
                      text: product.description,
                      url: window.location.href,
                    }).catch((error) => console.log('Error sharing', error));
                  } else {
                    // fallback for browsers that do not support Web Share API
                    alert('Sharing is not supported in this browser.');
                  }
                }}
                className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Share product"
              >
                <ShareIcon className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={() => {
                  if (!isInWishlist(productId)) {
                    addToWishlist({
                      id: productId,
                      name: product.name,
                      price: selectedVariant.price,
                      image: selectedVariant.image,
                      category: product.category,
                    });
                    alert('Added to wishlist!');
                  } else {
                    alert('Product already in wishlist');
                  }
                }}
                className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Add to wishlist"
              >
                <HeartIcon
                  className={`w-4 h-4 ${
                    isInWishlist(productId) ? 'text-red-500' : 'text-gray-700'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
       


        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">{product.rating} Ratings</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
              <span className="text-green-600 font-semibold">In Stock ({selectedVariant?.stock ?? product.stock})</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-teal-700"> {selectedVariant?.price ?? product.price}</p>
              {product.originalPrice && (
                <>
                  <p className="text-xl text-gray-500 line-through">{selectedVariant?.price ?? product.price}</p>
                  <span className="text-sm text-red-600">-10%</span>
                </>
              )}
            </div>
            {product.sku && (
              <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          {/* quantity selection */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-900">Quantity:</h2>
  <div className="flex gap-3 flex-wrap">
    {product.variants.map((variant, index) => {
      const isSelected = selectedVariant?.volume === variant.volume;
      const isDisabled = !variant.image; // or variant.stock === 0

      return (
        <button
          key={index}
          onClick={() => !isDisabled && setSelectedVariant(variant)}
          disabled={isDisabled}
          className={`px-4 py-2 border rounded-full transition-all
            ${isDisabled
              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              : isSelected
                ? 'bg-teal-700 text-white border-teal-700'
                : 'bg-transparent text-black border-gray-300 hover:bg-teal-700 hover:text-white'
            }`}
        >
          {variant.volume}
        </button>
      );
    })}
  </div>
</div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">How to Use</h2>
            <div className="space-y-4">
              {product.howToUse.map((step, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Key Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.keyIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2 text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`flex-1 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all flex items-center justify-center gap-2 ${
                isAddingToCart ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <ShoppingCartIcon className={`w-6 h-6 ${isAddingToCart ? 'animate-bounce' : ''}`} />
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                30 Days Return
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
        {reviews.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowReviewForm(true)}
          className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
        >
          Write a Review
        </button>
      </div>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Write a Review for {product.name}</h2>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={newReviewName}
                  onChange={(e) => setNewReviewName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReviewRating(star)}
                      className={`focus:outline-none ${
                        star <= newReviewRating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      aria-label={`${star} star`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="content" className="block text-gray-700 font-medium mb-1">
                  Review
                </label>
                <textarea
                  id="content"
                  value={newReviewContent}
                  onChange={(e) => setNewReviewContent(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  rows={4}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
