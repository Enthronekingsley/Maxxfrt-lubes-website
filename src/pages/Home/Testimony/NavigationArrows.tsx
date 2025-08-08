import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { NavigationArrowsProps } from "./Testimonial.types";

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const NavButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #2563eb;
    transform: scale(1.1);
  }
`;

export const NavigationArrows = ({ onPrev, onNext }: NavigationArrowsProps) => (
  <NavigationButtons>
    <NavButton onClick={onPrev} aria-label="Previous testimonial">
      <FaChevronLeft />
    </NavButton>
    <NavButton onClick={onNext} aria-label="Next testimonial">
      <FaChevronRight />
    </NavButton>
  </NavigationButtons>
);
