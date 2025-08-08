import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 102, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 102, 255, 0);
  }
`;

export const FooterContainer = styled.footer`
  background: var(--footer-bg, #1a1a1a);
  color: var(--footer-text, #f5f5f5);
  padding: 3rem 5%;
  margin-top: auto;
  // overflow: hidden;
  width: 100%;
  max-width: 100%;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 90%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 95%;
  }
`;

export const ContentSection = styled.div`
  opacity: 0;
  transform: translateX(-80px) scale(0.8);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform, opacity;

  h3 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #0033a1, #0066ff);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  h4 {
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 1.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: #0066ff;
      transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }

    &:hover::after {
      width: 100%;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--footer-text, #f5f5f5);
    margin-bottom: 1.5rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--footer-link, #a1a1aa);
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    position: relative;
    padding-left: 0;

    &::before {
      content: "→";
      position: absolute;
      left: -20px;
      opacity: 0;
      transition: all 0.3s ease;
      color: #0066ff;
    }

    &:hover {
      color: var(--footer-link-hover, #ffffff);
      padding-left: 20px;

      &::before {
        left: 0;
        opacity: 1;
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  a {
    display: inline-flex;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.2);
    }

    img {
      width: 32px;
      height: 32px;
      filter: brightness(0) invert(1);
      opacity: 0.9;
      transition: all 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const ContactInfo = styled.div`
  a {
    color: var(--footer-link, #a1a1aa);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--footer-link-hover, #ffffff);
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateY(100px) scale(0.8);
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform, opacity;

  input,
  textarea {
    padding: 1rem;
    border: 1px solid #333;
    background-color: #262626;
    color: #fff;
    font-size: 1rem;
    border-radius: 8px;
    resize: none;
    transition: all 0.3s ease;

    &:focus {
      border-color: #0066ff;
      box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.3);
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  textarea {
    min-height: 120px;
  }

  button {
    background: #0066ff;
    color: #fff;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: #0052cc;
      animation: ${pulse} 1.5s infinite;
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--footer-copyright, #a1a1aa);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  &::before {
    content: "";
    display: block;
    width: 200px;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 auto 2rem;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
