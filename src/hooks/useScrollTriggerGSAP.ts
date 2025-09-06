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

    // Handle simple card switching animation
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
      
      // Define a gentler snap zone for subtle pausing effect
      const snapZoneStart = 0.3; // Start subtle pause at 30% of card height
      const snapZoneEnd = 0.7;   // End subtle pause at 70% of card height
      const isInSnapZone = cardProgress >= snapZoneStart && cardProgress <= snapZoneEnd;
      
      // If we're at the last card and have scrolled past its transition point, 
      // keep the last card fully visible and stop the animation
      const isAtLastCard = clampedIndex === contentElements.length - 1;
      const isPastLastCardTransition = relativeScroll > (contentElements.length - 1) * cardHeight + cardHeight * 0.8; // 80% through last card

      console.log('Scroll Debug:', {
        relativeScroll,
        cardHeight,
        activeIndex,
        clampedIndex,
        cardProgress,
        contentElementsLength: contentElements.length
      });

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
          // Current active card - smooth slide out with subtle pause
          if (isAtLastCard) {
            // At last card - keep it visible
            transform = 'translateY(0%)';
            opacity = '1';
            zIndex = '10';
          } else {
            // Normal slide out with reduced sensitivity
            let progress = cardProgress;
            
            // Add subtle pause effect in the middle
            if (isInSnapZone) {
              // In snap zone - slow down the animation for a pause effect
              const snapProgress = (cardProgress - snapZoneStart) / (snapZoneEnd - snapZoneStart);
              progress = snapZoneStart + (snapProgress * 0.3); // Slow down by 70%
            }
            
            transform = `translateY(${-progress * 100}%)`;
            opacity = (1 - progress).toString();
            zIndex = '10';
          }
        } else if (index === clampedIndex + 1) {
          // Next card - smooth slide in with subtle pause
          if (isAtLastCard) {
            // At last card - no next card to show
            transform = 'translateY(100%)';
            opacity = '0';
            zIndex = '1';
          } else {
            // Normal slide in with reduced sensitivity
            let progress = cardProgress;
            
            // Add subtle pause effect in the middle
            if (isInSnapZone) {
              // In snap zone - slow down the animation for a pause effect
              const snapProgress = (cardProgress - snapZoneStart) / (snapZoneEnd - snapZoneStart);
              progress = snapZoneStart + (snapProgress * 0.3); // Slow down by 70%
            }
            
            transform = `translateY(${(1 - progress) * 100}%)`;
            opacity = progress.toString();
            zIndex = '10';
          }
        } else {
          // All other cards - hidden
          transform = 'translateY(100%)';
          opacity = '0';
          zIndex = '1';
        }
        
        console.log(`Card ${index}:`, { 
          transform, 
          opacity, 
          zIndex, 
          isAtLastCard, 
          isPastLastCardTransition, 
          isInSnapZone, 
          cardProgress: cardProgress.toFixed(2)
        });
        
        element.style.transform = transform;
        element.style.opacity = opacity;
        element.style.zIndex = zIndex;
      });

      setActiveIndex(clampedIndex);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    console.log('GSAP ScrollTrigger initialized', { contentElements: contentElements.length, visualElements: visualElements.length });
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
