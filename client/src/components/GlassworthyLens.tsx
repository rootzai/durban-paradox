import React, { useState, useEffect } from 'react';
import { Glasses } from 'lucide-react';

interface GlassworthyLensProps {
  isActive: boolean;
  onToggle: () => void;
}

export function GlassworthyLens({ isActive, onToggle }: GlassworthyLensProps) {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 p-3 lg:p-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 ${
        isActive 
          ? 'bg-red-600 text-white shadow-red-500/50 rotate-180' 
          : 'bg-black text-white shadow-black/50'
      }`}
      title={isActive ? "Deactivate Reality Filter" : "Activate Glassworthy Lens"}
    >
      <Glasses className={`w-6 h-6 lg:w-8 lg:h-8 transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`} />
    </button>
  );
}

export function GlitchText({ text, isActive }: { text: string; isActive: boolean }) {
  const [glitchedText, setGlitchedText] = useState(text);

  useEffect(() => {
    if (!isActive) {
      setGlitchedText(text);
      return;
    }

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let interval: NodeJS.Timeout;

    const startGlitch = () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setGlitchedText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    startGlitch();

    return () => clearInterval(interval);
  }, [isActive, text]);

  return (
    <span className={`${isActive ? 'font-mono text-red-600' : ''}`}>
      {glitchedText}
    </span>
  );
}
