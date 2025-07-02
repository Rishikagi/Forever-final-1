import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { useWishlist } from './context/WishlistContext';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

import GlassCleaner from './assets/200ml/Glass cleaner.png';
import CarPerfume from './assets/200ml/Car-perfume.png'
import DashboardPolish from './assets/200ml/Dashboard-polish.png'
import TyrePolish from './assets/200ml/Tyre-polish.png'
import CarwashShampoo from './assets/200ml/Car-wash-shampoo.png'

// new images
import GlassDeffoger from './assets/200ml/Glass deffoger.png';
import WiperWasherShampoo from './assets/200ml/Wiper washer shampoo.png';
import DryCleanShampoo from './assets/200ml/dry clean shampoo.png';
import GlassWashShampoo30ml from './assets/30ml/glass wash shampoo.png'; //new product



import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// import CarwashShampoo from './images/CarWashShampoo.webp';

const baseProducts = [
  {
    id: 'car-perfume',
    name: 'Car Perfume',
    price: 225.00,
    priceDisplay: '₹ 225.00',
    image: CarPerfume,
  },
  {
    id: 'dash-board-polish',
    name: 'Dash-Board Polish',
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: DashboardPolish,
  },
  {
    id: 'tyre-polish',
    name: 'Tyre Polish',
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: TyrePolish,
  },
    {
    id: 'glass-cleaner',
    name: 'Glass Cleaner',
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: GlassCleaner,
  },
  {
    id: 'car-wash-shampoo',
    name: 'Car Wash Shampoo',
    price: 140.00,
    priceDisplay: '₹ 140.00',
    image: CarwashShampoo,
  },
  // new images
  {
    id: 'glass-deffoger',
    name: 'Glass Deffoger',
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: GlassDeffoger,
  },
     {
    id: 'dry-clean-shampoo',
    name: 'Dry Clean Shampoo',
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: DryCleanShampoo,
  },
  {
     id: 'glass-wash-shampoo',
     name: 'Glass Wash Shampoo',
     price: 79.00,
     priceDisplay: '₹ 79.00',
     image: GlassWashShampoo30ml,
   },
  {
    id: 'wiper-washer-shampoo',
    name: 'Wiper Washer Shampoo', 
    price: 90.00,
    priceDisplay: '₹ 90.00',
    image: WiperWasherShampoo,
  }
];

// Remove repetition, use baseProducts directly
const products = baseProducts;

export default function CarCare() {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [sortOrder, setSortOrder] = useState('default');
  const [filterText, setFilterText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    let sortedProducts = [...filteredProducts];
    if (value === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...filteredProducts];
    }
    setFilteredProducts(sortedProducts);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterText(value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    // Reset sort order when filtering
    setSortOrder('default');
  };

  const handleShare = (product) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.name,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-gray-900 drop-shadow">Car Care Products</h1>
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-6 w-full">

        <div>
          <label htmlFor="filter" className="mr-2 font-semibold">Filter:</label>
          <input
            id="filter"
            type="text"
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Filter by product name"
            className="border border-teal-700 rounded p-2 text-teal-700 font-semibold bg-teal-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
        <div>
          <label htmlFor="sort" className="mr-2 font-semibold">Sort By:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-teal-700 rounded p-2 text-teal-700 font-semibold bg-teal-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 relative"
          >
            <Zoom>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-56 h-56 object-cover mb-3 shadow cursor-pointer" />
            </Link>
            </Zoom>
            <span className="text-lg font-semibold text-gray-800 mb-1">{product.name}</span>
            <div className="flex items-center justify-between w-full mt-1">
              <span className="text-base font-bold text-teal-700">{product.priceDisplay}</span>
            </div>
            <div className="absolute top-2 right-2 flex gap-2 bg-white rounded-full p-1 shadow-md z-10">
              <button
                onClick={() => {
                  if (!isInWishlist(product.id)) {
                    addToWishlist(product);
                    alert('Added to wishlist!');
                  } else {
                    alert('Product already in wishlist');
                  }
                }}
                aria-label="Add to wishlist"
                className="p-2 rounded-full"
              >
                {isInWishlist(product.id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21C12 21 5 14.5 5 9.5C5 7.01472 7.01472 5 9.5 5C10.8807 5 12 6.11929 12 6.11929C12 6.11929 13.1193 5 14.5 5C16.9853 5 19 7.01472 19 9.5C19 14.5 12 21 12 21Z" />
                  </svg>
                ) : (
                  <HeartIcon className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <button
                onClick={() => handleShare(product)}
                aria-label="Share product"
                className="p-2 rounded-full"
              >
                <ShareIcon className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <button 
              className="w-full text-white bg-teal-700 hover:bg-teal-800 p-2 shadow transition-colors duration-200 mt-4"
              onClick={() => addToCart(product, 1)}
            >
                <span className="text-sm md:text-base font-medium">ADD TO CART</span>
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}
