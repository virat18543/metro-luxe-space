import React, { useState, useEffect } from 'react';

interface BrandLogoProps {
  variant?: 'default' | 'white';
  className?: string;
  width?: number;
  height?: number;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  variant = 'default', 
  className = '', 
  width = 200, 
  height = 60 
}) => {
  const [logoSrc, setLogoSrc] = useState<string>('');
  
  useEffect(() => {
    const checkImageExists = async (url: string): Promise<boolean> => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      } catch {
        return false;
      }
    };
    
    const determineLogo = async () => {
      // Cache-busting timestamp
      const timestamp = Date.now();
      
      // Use the new minimalist SVG logo as primary
      const newSvgPath = `/20250922_1429_SVG Minimalist Design_remix_01k5ra8pb0f0btsbzk30bg2v0b.svg?v=${timestamp}`;
      
      // Keep white variant fallback for now (will need separate white version)
      const svgPath = variant === 'white' 
        ? `/brand/logo-white.svg?v=${timestamp}` 
        : newSvgPath;
      
      const pngFallback = variant === 'white' 
        ? `/brand/logo-white.png?v=${timestamp}` 
        : `/brand/logo.png?v=${timestamp}`;
      
      // Check if SVG exists, otherwise fallback to PNG
      const svgExists = await checkImageExists(svgPath);
      setLogoSrc(svgExists ? svgPath : pngFallback);
    };
    
    determineLogo();
  }, [variant]);
  
  const altText = 'Metro Surfaces Logo';
  
  return (
    <img
      src={logoSrc}
      alt={altText}
      width={width}
      height={height}
      className={`brand-logo ${className}`}
      style={{
        width: width + 'px',
        height: height + 'px',
        objectFit: 'contain'
      }}
    />
  );
};

export default BrandLogo;
