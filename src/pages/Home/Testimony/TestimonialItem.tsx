// import styled, { keyframes } from "styled-components";
// import type { TestimonialItemProps } from "./Testimonial.types";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const TestimonialContent = styled.div`
//   background: white;
//   padding: 1.5rem;
//   margin: 0 auto 1rem;
//   max-width: 600px;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   animation: ${fadeIn} 0.6s ease-out;
// `;

// const TestimonialText = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: #555;
//   margin-bottom: 1rem;
//   font-style: italic;
// `;

// const TestimonialAuthor = styled.p`
//   font-weight: 600;
//   color: #3b82f6;
// `;

// export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => (
//   <TestimonialContent>
//     <TestimonialText>{testimonial.text}</TestimonialText>
//     <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
//   </TestimonialContent>
// );

import styled from "styled-components";
import type { TestimonialItemProps } from "./Testimonial.types";

const TestimonialContent = styled.div`
  background: white;
  padding: 1.5rem;
  margin: 0 auto 1rem;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  color: #3b82f6;
`;

export const TestimonialItem = ({ testimonial }: TestimonialItemProps) => (
  <TestimonialContent>
    <TestimonialText>{testimonial.text}</TestimonialText>
    <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
  </TestimonialContent>
);
