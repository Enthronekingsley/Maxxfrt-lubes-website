import Hero from "../../component/Hero.tsx";
import { TestimonialCarousel } from "./Testimony/TestimonialCarousel.tsx";
import { TESTIMONIALS } from "./Testimony/Testimonial.ts";
import AboutSection from "../../component/Header/AboutSection.tsx";
import AboutMaxxFRTLube from "../../component/Header/AboutMaxxFRTLube.tsx";
import CompanySolutions from "../../component/Header/CompanySolutions.tsx";
import AdvantagesSection from "../../component/Header/AdvantagesSection.tsx";
import NewsSection from "../../component/Header/NewsSection.tsx";
import HomeProducts from "./HomeProducts/HomeProducts.tsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMaxxFRTLube />
      <AboutSection />
      <HomeProducts />
      <CompanySolutions />
      <AdvantagesSection />
      <TestimonialCarousel
        testimonials={TESTIMONIALS}
        autoPlayInterval={8000}
      />
      <NewsSection />
    </div>
  );
};
export default Home;
