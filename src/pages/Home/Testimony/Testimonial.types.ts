export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  backgroundColor?: string;
  enableAutoRotation?: boolean;
}

export interface TestimonialItemProps {
  testimonial: Testimonial;
  animationType: "fade" | "slide";
}

export interface NavigationDotsProps {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
  direction: number;
}

export interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}
