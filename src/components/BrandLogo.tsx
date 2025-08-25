import React from 'react';

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
  // Cache-busting timestamp
  const timestamp = Date.now();
  
  const logoSrc = variant === 'white' 
    ? `/public/brand/logo-white.svg?v=${timestamp}` 
    : `/public/brand/logo.svg?v=${timestamp}`;
  
  const altText = variant === 'white' 
    ? 'Metro Surfaces Logo (White)' 
    : 'Metro Surfaces Logo';

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
