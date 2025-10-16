/**
 * THE ARCHITECH - GRAIN TEXTURE UTILITY
 * 
 * Provides SVG grain texture for adding subtle depth to card surfaces.
 * Part of the "Technical Elegance" design system.
 */

/**
 * Generate a grain texture SVG as a data URL
 * @param opacity - Opacity of the grain texture (0-1), default 0.03
 * @returns Data URL string for use in CSS background-image
 */
export const getGrainTexture = (opacity: number = 0.03): string => {
  const svg = `
    <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='0.9' 
          numOctaves='4' 
          stitchTiles='stitch'
        />
      </filter>
      <rect 
        width='100%' 
        height='100%' 
        filter='url(#noiseFilter)' 
        opacity='${opacity}'
      />
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

/**
 * CSS class for grain texture overlay
 */
export const grainTextureClass = 'grain-texture';

/**
 * Inline style object for grain texture
 * @param opacity - Opacity of the grain texture (0-1), default 0.03
 */
export const getGrainTextureStyle = (opacity: number = 0.03): React.CSSProperties => ({
  position: 'relative',
  overflow: 'hidden'
});

/**
 * Create a grain texture overlay element
 * Use this in React components for programmatic grain application
 */
export const GrainTextureOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.03 }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: getGrainTexture(opacity),
      borderRadius: 'inherit',
      zIndex: 1
    }}
  />
);

