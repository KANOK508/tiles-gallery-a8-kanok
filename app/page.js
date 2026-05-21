
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    // Swapped mt-19 to mt-20 for an accurate, standardized top margin spacing rule
    <div className="mt-20">
      <HeroSection/>
    </div>
  );
}