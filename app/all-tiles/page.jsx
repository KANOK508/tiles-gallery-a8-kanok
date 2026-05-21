
import TilesCard from '@/components/ui/TilesCard';
import React from 'react';

const AllTiles = async () => {
  const res = await fetch('https://tiles-gallery2.vercel.app/tiles.json');
  const data = await res.json();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-8 mt-4 text-base-content border-b-2 border-primary/20 pb-2 inline-block">
        All Tiles Collection
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;