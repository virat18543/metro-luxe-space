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
      
      const svgPath = variant === 'white' 
        ? `/brand/logo-white.svg?v=${timestamp}` 
        : `/brand/logo.svg?v=${timestamp}`;
      
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
