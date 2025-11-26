
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/InstructorSection";
import PashtoServices from "./components/PashtoServices";
import LanguageCourse from "./components/LanguageCourse"
import PashtoBooks from "./components/PashtoBooks";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";
import ContactUs from "./components/ContactUs";
import Subscribe from "./components/Subscription";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative bg-white font-geist overflow-hidden">
        <div className="absolute right-0 md:top-0 sm:top-[2%] xs:top-[2%] w-[70%] h-[800px] bg-[url('/gradient-bg.svg')] bg-no-repeat bg-right bg-[length:100%_120%] rounded-bl-[250px] pointer-events-none z-100"></div>
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
        <Instructor />
        <PashtoServices />
        <LanguageCourse />
        <PashtoBooks />
        <Testimonials />
        <Questions />
        <ContactUs />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}
