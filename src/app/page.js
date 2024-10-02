import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/ui/HeroSection";

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }

export default function Home() {
  return ( 
    <div className="items-center  justify-items-center h-screen p-8 pb-20 gap-16 sm:p-15 lg:p-20 font-[family-name:var(--font-geist-sans)]">
    <HeroSection/>

    </div>
  );
}
