"use client"
import React, { useState } from 'react';

const categories = [
  'Home & Office',
  'Phones & Tablets',
  'Fashion',
  'Health & Beauty',
  'Electronics',
  'Computing',
  'Grocery',
  'Garden & Outdoors',
  'Automobile',
  'Sporting Goods',
  'Gaming',
  'Baby Products',
];

const categoryContent = {
  'Home & Office': <p>Content for Home & Office</p>,
  'Phones & Tablets': <p>Content for Phones & Tablets</p>,
  'Fashion': <p>Content for Fashion</p>,
  'Health & Beauty': <p>Content for Health & Beauty</p>,
  'Electronics': <p>Content for Electronics</p>,
  'Computing': <p>Content for Computing</p>,
  'Grocery': <p>Content for Grocery</p>,
  'Garden & Outdoors': <p>Content for Garden & Outdoors</p>,
  'Automobile': <p>Content for Automobile</p>,
  'Sporting Goods': <p>Content for Sporting Goods</p>,
  'Gaming': <p>Content for Gaming</p>,
  'Baby Products': <p>Content for Baby Products</p>,
};

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Home & Office');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-0 md:p-2 lg:p-4">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer text-[12px] sm:text-sm lg:text-base font-poppins md:rounded   p-2 ${selectedCategory === category ? 'bg-gray-300 font-semibold' : ''}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <h2 className="text-xl font-semibold mb-4">{selectedCategory}</h2>
        <div>
          {categoryContent[selectedCategory] || <p>No content available</p>}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
