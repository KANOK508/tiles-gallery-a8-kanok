import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
  const { id } = await params;
  
  // Updated to point directly to your live Vercel JSON link
  const res = await fetch('https://tiles-gallery2.vercel.app/tiles.json');
  const data = await res.json();

  const findData = data.find((details) => details.id === id);
  
  // Safety check: Show a clean message if the tile ID doesn't exist or is still loading
  if (!findData) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Tile details not found.
      </div>
    );
  }
    
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="overflow-hidden rounded-lg shadow-md bg-base-200">
        <Image
          src={findData.image}
          alt={findData.title} 
          width={800} 
          height={800}
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          priority // Tells Next.js to load this main image quickly
        />
      </div>

      <div className="flex flex-col justify-between h-full py-2">
        <div>
          <h1 className="text-3xl font-bold text-base-content">{findData.title}</h1>
          <p className="mt-3 text-base-content/70 text-justify">{findData.description}</p>
        </div>

        <div className="mt-6 space-y-2 bg-base-200 p-4 rounded-xl">
          <p><span className="font-semibold text-primary">Category:</span> {findData.category}</p>
          <p><span className="font-semibold text-primary">Material:</span> {findData.material}</p>
          <p><span className="font-semibold text-primary">Dimensions:</span> {findData.dimensions}</p>
          <p><span className="font-semibold text-primary">Price:</span> <span className="text-success font-bold">${findData.price}</span></p>
          <p>
            <span className="font-semibold text-primary">Status:</span>{' '}
            <span className={`badge ${findData.inStock ? 'badge-success' : 'badge-error'} text-white font-medium`}>
              {findData.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;