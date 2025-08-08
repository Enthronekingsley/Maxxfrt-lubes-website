import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "../config/navigation";
import { SITE_META } from "../config/siteMetadata";
import * as S from "./Footer.styles";
import logo from "../../assets/logo.png";

export const Footer = () => {
  const contentRefs = useRef<HTMLElement[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const isVisible = entry.isIntersecting;

          if (isVisible) {
            if (contentRefs.current.includes(target)) {
              const index = contentRefs.current.indexOf(target);
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateX(0) scale(1)";
              }, index * 200);
            }

            if (target === formRef.current) {
              setTimeout(() => {
                target.style.opacity = "1";
                target.style.transform = "translateY(0) scale(1)";
              }, 600);
            }
          } else {
            target.style.opacity = "0";
            target.style.transform =
              target === formRef.current
                ? "translateY(100px) scale(0.8)"
                : "translateX(-80px) scale(0.8)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const addToContentRefs = (el: HTMLElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <S.FooterContainer>
      <S.FooterGrid>
        <S.ContentSection ref={addToContentRefs}>
          <S.LogoContainer>
            <img
              src={logo}
              alt={`${SITE_META.title} Logo`}
              style={{ height: "100px", width: "auto" }}
            />
          </S.LogoContainer>
          <S.Description>{SITE_META.description}</S.Description>
          <S.SocialLinks>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`/icons/${social.icon}.svg`} alt={social.name} />
              </a>
            ))}
          </S.SocialLinks>
        </S.ContentSection>

        <S.ContentSection ref={addToContentRefs}>
          <h4>Customer Support</h4>
          <S.FooterLinks>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </S.FooterLinks>
        </S.ContentSection>

        <S.ContentSection ref={addToContentRefs}>
          <h4>Contact Info</h4>
          <S.ContactInfo>
            <p>
              Room 101-104, 201-204, Building 14, Huakang Building, No. 1, Keji
              5th Road, Xingtan Industrial Zone, Qixing Community, Xingtan Town,
              Shunde District, Foshan City, Guangdong Province
            </p>
            <p>
              Email: <a href="mailto:frt31@fitlube.com">frt31@fitlube.com</a>
            </p>
            <p>
              Phone: <a href="tel:+8618126677577">+86 18126677577</a>
            </p>
          </S.ContactInfo>
        </S.ContentSection>

        <S.ContentSection ref={addToContentRefs}>
          <h4>Newsletters</h4>
          <p>Enter your email and we'll send you latest information plans.</p>
          <S.Form ref={formRef}>
            <input type="text" placeholder="* Name" />
            <input type="email" placeholder="* Email" />
            <input type="text" placeholder="Phone/WhatsApp/WeChat" />
            <textarea placeholder="* Enter product details such as size, color, materials etc." />
            <button type="submit">Send</button>
          </S.Form>
        </S.ContentSection>
      </S.FooterGrid>

      <S.Copyright>
        © {new Date().getFullYear()} {SITE_META.title} All Rights Reserved
      </S.Copyright>
    </S.FooterContainer>
  );
};
