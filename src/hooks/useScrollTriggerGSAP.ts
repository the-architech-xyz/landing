import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollTriggerGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const container = containerRef.current;
    const sticky = stickyRef.current;
    const contentElements = contentRefs.current.filter(Boolean);
    const visualElements = visualRefs.current.filter(Boolean);

    // Set up the sticky pin
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      pin: sticky,
      pinSpacing: false
    });

    // Handle smooth card switching animation with proper timing
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + scrollPosition;
      const relativeScroll = Math.max(0, scrollPosition - containerTop);
      
      const sectionHeight = window.innerHeight;
      const cardHeight = sectionHeight * 0.6; // Each card takes 60% of viewport height

      // Calculate which card should be active
      const activeIndex = Math.floor(relativeScroll / cardHeight);
      const clampedIndex = Math.max(0, Math.min(activeIndex, contentElements.length - 1));
      
      // Calculate transition progress within current card (0 to 1)
      const cardProgress = (relativeScroll % cardHeight) / cardHeight;
      
      // If we're at the last card and have scrolled past its transition point, 
      // keep the last card fully visible and stop the animation
      const isAtLastCard = clampedIndex === contentElements.length - 1;
      const isPastLastCardTransition = relativeScroll > (contentElements.length - 1) * cardHeight + cardHeight * 0.8;

      // Set all cards to their proper states
      contentElements.forEach((element, index) => {
        if (!element) return;
        
        let transform = '';
        let opacity = '';
        let zIndex = '';
        
        // If we're past the last card transition, keep the last card fully visible
        if (isPastLastCardTransition) {
          if (index === contentElements.length - 1) {
            transform = 'translateY(0%)';
            opacity = '1';
            zIndex = '10';
          } else {
            transform = 'translateY(100%)';
            opacity = '0';
            zIndex = '1';
          }
        } else if (index === clampedIndex) {
          // Current active card - slide up as user scrolls
          if (isAtLastCard) {
            // At last card - keep it visible
            transform = 'translateY(0%)';
            opacity = '1';
            zIndex = '10';
          } else {
            // Normal slide out
            transform = `translateY(${-cardProgress * 100}%)`;
            opacity = (1 - cardProgress).toString();
            zIndex = '10';
          }
        } else if (index === clampedIndex + 1) {
          // Next card - slide up from bottom
          if (isAtLastCard) {
            // At last card - no next card to show
            transform = 'translateY(100%)';
            opacity = '0';
            zIndex = '1';
          } else {
            // Normal slide in
            transform = `translateY(${(1 - cardProgress) * 100}%)`;
            opacity = cardProgress.toString();
            zIndex = '10';
          }
        } else {
          // All other cards - hidden
          transform = 'translateY(100%)';
          opacity = '0';
          zIndex = '1';
        }
        
        element.style.transform = transform;
        element.style.opacity = opacity;
        element.style.zIndex = zIndex;
      });

      setActiveIndex(clampedIndex);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setContentRef = (index: number) => (element: HTMLDivElement | null) => {
    contentRefs.current[index] = element;
  };

  const setVisualRef = (index: number) => (element: HTMLDivElement | null) => {
    visualRefs.current[index] = element;
  };

  return {
    containerRef,
    stickyRef,
    setContentRef,
    activeIndex
  };
};
