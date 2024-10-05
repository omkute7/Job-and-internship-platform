import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/ui/HeroSection";
import InfoCards from "@/components/InfoCards";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }

export default function Home() {
  return ( 
    <div className="items-center   justify-items-center  p-8 pb-20 gap-16 sm:p-15 lg:p-20 font-[family-name:var(--font-geist-sans)]">
    <HeroSection/>
    <InfoCards/>
    <InfoCards
     FlexReverse=" flex-row-reverse"
    />
    <InfoCards
           

    />
    
    </div>
  );
}
