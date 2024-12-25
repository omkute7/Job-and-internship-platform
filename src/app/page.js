import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/ui/HeroSection";
import InfoCards from "@/components/InfoCards";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import NavBar from "@/components/ui/NavBar";

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }

export default function Home() {
  return ( 
    <div className="items-center  justify-items-center font-[family-name:var(--font-geist-sans)] ">
    <HeroSection/>
    <InfoCards/>
  
    
    </div>
  );
}
