import styled from "styled-components";
import type { NavigationDotsProps } from "./Testimonial.types";

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.5rem 0;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#3b82f6" : "#cbd5e1")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.3);
  }
`;

export const NavigationDots = ({
  count,
  activeIndex,
  onDotClick,
}: NavigationDotsProps) => (
  <DotsContainer>
    {Array.from({ length: count }).map((_, index) => (
      <Dot
        key={index}
        active={index === activeIndex}
        onClick={() => onDotClick(index)}
      />
    ))}
  </DotsContainer>
);
