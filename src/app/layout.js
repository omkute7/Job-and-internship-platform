import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Carrier Connect Portal",
  description: "An Job And Internship Portal by Rajasthan Government",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
      
    //   <ThemeProvider
    //         attribute="class"
    //         defaultTheme="system"
    //         enableSystem
    //         disableTransitionOnChange
    //       >
    //       <SpeedInsights/>
    //         <NavBar/>
    //         {/* <MobileMenu/> */}
    //         {children}
    //         <Footer/>
    //       </ThemeProvider>
    //   </body>
    // </html>
      <ClerkProvider>
    <html lang="en">
      <body>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <SpeedInsights/>
             <NavBar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>

  );
}
