import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScrollAnimations() {
  const hasInitialized = useRef(false);

  const isMobile = useCallback(() => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }, []);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {

        // Hero Parallax
        const heroImg = document.querySelector("[data-parallax-hero]");
        if (heroImg) {
          gsap.to(heroImg, {
            y: "20%",
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: heroImg.closest("section"),
              start: "top top",
              end: "bottom top",
              scrub: 0.3,
            },
          });
        }

        // Split text animations
        const splitHeadings = document.querySelectorAll("[data-split-text]");
        splitHeadings.forEach((heading) => {
          const el = heading;
          const text = el.textContent || "";
          el.innerHTML = "";
          
          text.split(" ").forEach((word, wi, words) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";
            wordSpan.style.overflow = "hidden";
            
            word.split("").forEach((char) => {
              const charSpan = document.createElement("span");
              charSpan.textContent = char;
              charSpan.style.display = "inline-block";
              charSpan.classList.add("split-char");
              wordSpan.appendChild(charSpan);
            });
            el.appendChild(wordSpan);
            if (wi < words.length - 1) {
              const space = document.createElement("span");
              space.innerHTML = "&nbsp;";
              space.style.display = "inline-block";
              el.appendChild(space);
            }
          });

          const chars = el.querySelectorAll(".split-char");
          gsap.fromTo(
            chars,
            { y: "110%", opacity: 0, rotateX: -90 },
            {
              y: "0%",
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              ease: "power4.out",
              stagger: 0.02,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Simple Fade reveals
        const paragraphs = document.querySelectorAll("[data-text-reveal]");
        paragraphs.forEach((p) => {
          gsap.fromTo(
            p,
            { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: p,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Service Cards Reveal
        const serviceCards = document.querySelectorAll("[data-service-card]");
        if (serviceCards.length > 0) {
          serviceCards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1,
                ease: "power3.out",
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: card.parentElement,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          });
        }

        // Gallery reveal
        const galleryItems = document.querySelectorAll("[data-gallery-reveal]");
        galleryItems.forEach((img, i) => {
          gsap.fromTo(img, 
            { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
            { 
              clipPath: "inset(0% 0 0 0)", 
              scale: 1, 
              duration: 1.2, 
              ease: "power4.inOut",
              delay: i * 0.1,
              scrollTrigger: {
                trigger: img,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        // Horizontal Scroll
        if (!isMobile()) {
          const horizontalScroll = document.querySelector("[data-horizontal-scroll]");
          const horizontalInner = document.querySelector("[data-horizontal-inner]");
          if (horizontalScroll && horizontalInner) {
            const totalWidth = horizontalInner.scrollWidth - window.innerWidth;
            gsap.to(horizontalInner, {
              x: -totalWidth,
              ease: "none",
              scrollTrigger: {
                trigger: horizontalScroll,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        }

        // Gold line animations
        const goldLines = document.querySelectorAll(".gold-line");
        goldLines.forEach((line) => {
          gsap.fromTo(line, 
            { scaleX: 0, transformOrigin: "left center" },
            { 
              scaleX: 1, 
              duration: 1.2, 
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);
}

export default function ScrollAnimationProvider({ children }) {
  useGSAPScrollAnimations();
  return <>{children}</>;
}
