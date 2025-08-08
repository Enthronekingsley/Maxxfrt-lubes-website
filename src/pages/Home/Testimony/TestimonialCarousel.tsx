import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TestimonialItem } from "./TestimonialItem";
import { NavigationArrows } from "./NavigationArrows";
import { NavigationDots } from "./NavigationDots";
import type { TestimonialCarouselProps } from "./Testimonial.types";

const smoothSlideIn = keyframes`
  from { 
    transform: translateX(100%); 
    opacity: 0; 
  }
  to { 
    transform: translateX(0); 
    opacity: 1; 
  }
`;

const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const TestimonialSection = styled.section<{ isVisible: boolean }>`
  padding: 5rem 2rem;
  background-color: #e0f2fe; /* Your specified blue background */
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: ${(props) => (props.isVisible ? fadeInUp : "none")} 0.5s ease-out
    forwards;
`;

const TestimonialContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  min-height: 300px;
  overflow: hidden;
`;

const SmoothSlideWrapper = styled.div`
  animation: ${smoothSlideIn} 0.8s cubic-bezier(0.16, 0.77, 0.3, 1);
  will-change: transform, opacity; /* Optimizes animation performance */
`;

export const TestimonialCarousel = ({
  testimonials,
  autoPlayInterval = 60000,
  enableAutoRotation = true,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const startAutoRotation = () => {
    if (!enableAutoRotation) return;

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(goToNext, autoPlayInterval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAutoRotation();
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) startAutoRotation();
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isVisible]);

  return (
    <TestimonialSection ref={sectionRef} isVisible={isVisible}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Hear What Our Customers Say
      </h2>
      <TestimonialContainer>
        <SmoothSlideWrapper key={currentIndex}>
          <TestimonialItem
            testimonial={testimonials[currentIndex]}
            animationType={"slide"}
          />
        </SmoothSlideWrapper>

        <NavigationArrows onPrev={goToPrev} onNext={goToNext} />
        <NavigationDots
          count={testimonials.length}
          activeIndex={currentIndex}
          onDotClick={goToIndex}
          direction={1}
        />
      </TestimonialContainer>
    </TestimonialSection>
  );
};
