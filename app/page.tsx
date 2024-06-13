import Diamond from "@/components/Diamond";
import Navbar from "@/components/Navbar";
import FlashLight from '@/components/FlashLight'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Diamond/>
      <Navbar/>
      <FlashLight/>
    </div>
  );
}
