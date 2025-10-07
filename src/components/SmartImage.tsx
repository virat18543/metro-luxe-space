import React, { useEffect, useMemo } from "react";

export type SmartImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspect?: string;
  priority?: boolean;
};

function makePlaceholder(filename: string, w = 1600, h = 900) {
  const font = Math.floor(Math.min(w, h) / 12);
  const label = filename || "placeholder";
  const svg = `<svg height="${h}" width="${w}" xmlns="http://www.w3.org/2000/svg">  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#f3f4f6"></stop>
      <stop offset="1" stop-color="#e5e7eb"></stop>
    </linearGradient>
  </defs>
  <rect fill="url(#g)" height="100%" width="100%"></rect>
  <text dominant-baseline="middle" text-anchor="middle" x="50%" y="50%">
        font-family="Inter, Arial, sans-serif" font-size="${font}" font-weight="700"
        fill="#6b7280">${label}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function SmartImage({ src, alt, width = 1600, height = 900, className, aspect, priority }: SmartImageProps) {
  const file = useMemo(() => src.split("/").pop() || "image", [src]);
  const ph = useMemo(() => makePlaceholder(file, width, height), [file, width, height]);

  // Inject high-priority preload link when priority is true
  useEffect(() => {
    if (!priority) return;
    const linkId = `preload-${src}`;
    if (document.getElementById(linkId)) return;

    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById(linkId);
      if (existingLink) existingLink.remove();
    };
  }, [priority, src]);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== ph) img.src = ph;
      }}
    />
  );
}
