import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// Using your root path alias to safely target the ui folder
import TilesCard from "@/components/ui/TilesCard";

const marqueeItems = [
  "New Arrivals:",
  "Weekly Feature: Modern Geometric Patterns",
  "Join the Community & Share Your Designs",
  "Trending: Luxury Ceramic Collection",
  "Hot Deal: 20% Off Selected Tiles",
  "Top Rated: Modern Kitchen Tiles",
  "Customer Favorite: Matte Finish Series",
  "New Stock: Italian Marble Series",
  "Design Inspiration: Minimalist Interior Tiles",
  "Explore: Outdoor Wall Tile Collection",
];

const HeroSection = async () => {
  // ✅ Cleanly fetching data from your real Vercel deployment link
  const res = await fetch('https://tiles-gallery2.vercel.app/tiles.json');
  const data = await res.json();
   
  return (
    <div className="w-full mt-8 relative">

      {/* Hero Banner Area */}
      <section 
        style={{ backgroundImage: "url('/bg-hero.avif')", backgroundPosition: 'center' }} 
        className="bg-black/10 text-white h-[78vh] flex flex-col items-center justify-center text-center px-4 relative rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for text readability */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 z-10">
          Discover Your Perfect Aesthetic
        </h1>

        <Link
          href="/all-tiles"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition z-10 shadow-md"
        >
          Browse Now
        </Link>
      </section>

      {/* Text Announcement Marquee */}
      <div className="-mt-12 max-w-[1140px] bg-black/80 mx-auto relative z-20 rounded-xl overflow-hidden shadow-xl">
        <Marquee pauseOnHover>
          {marqueeItems.map((item, index) => (
            <p key={index} className="px-5 text-white py-3 text-[19px] font-medium">
              {item}
            </p>
          ))}
        </Marquee>
      </div>

      {/* Featured Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-base-content">
          Featured Tiles
        </h2>
        
        {/* Responsive grid mapping the first 8 items via TilesCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.slice(0, 8).map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))}
        </div>
        
        {/* Navigation Action CTA */}
        <div className="text-center mt-10">
          <Link 
            href="/all-tiles" 
            className="px-6 py-2.5 shadow-md hover:scale-105 transition-all duration-300 bg-linear-to-l from-[rgb(3,83,255)] via-[#53adc4] to-[rgb(3,83,255)] font-bold text-white inline-block bg-blue-600 rounded-full"
          >
            See More
          </Link>
        </div>
      </section>
      
    </div>
  );
};

export default HeroSection;