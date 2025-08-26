import React, { useMemo } from "react";

export type SmartImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

function makePlaceholder(filename: string, w = 1600, h = 900) {
  const font = Math.floor(Math.min(w, h) / 12);
  const label = filename || "placeholder";
  const svg = `<svg height="${h}" width="${w}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <lineargradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#f3f4f6"></stop>
      <stop offset="1" stop-color="#e5e7eb"></stop>
    </lineargradient>
  </defs>
  <rect fill="url(#g)" height="100%" width="100%"></rect>
  <text dominant-baseline="middle" text-anchor="middle" x="50%" y="50%"
        font-family="Inter, Arial, sans-serif" font-size="${font}" font-weight="700"
        fill="#6b7280">${label}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function SmartImage({ src, alt, width = 1600, height = 900, className }: SmartImageProps) {
  const file = useMemo(() => src.split("/").pop() || "image", [src]);
  const ph = useMemo(() => makePlaceholder(file, width, height), [file, width, height]);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== ph) img.src = ph;
      }}
    />
  );
}
