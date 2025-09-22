/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
  
  function gtag(command: string, targetId: string, config?: any): void;
}