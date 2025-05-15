"use client";
import { useState, useEffect, useRef } from 'react';

const images = [
    { src: '/topics/ai.jpg', alt: 'Artificial Intelligence' },
    { src: '/topics/ethics.jpg', alt: 'Ethics in Tech' },
    { src: '/topics/security.jpg', alt: 'Cyber Security' },
  ];

export default function TopicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Swipe handling refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const delay = 5000; // 5 seconds autoplay

  // Reset timer helper
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Next and Prev functions that also reset timer
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimeout();
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimeout();
  };

  // Autoplay effect with pause and reset on currentIndex or paused change
  useEffect(() => {
    resetTimeout();

    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, delay);
    }

    return () => resetTimeout();
  }, [currentIndex, paused]);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50; // swipe sensitivity threshold

    if (delta > threshold) {
      // swiped left
      next();
    } else if (delta < -threshold) {
      // swiped right
      prev();
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg aspect-video"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {images.map(({ src, alt }, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          loading="lazy"
          draggable={false}
        />
      ))}
  
      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2"
      >
        ›
      </button>
    </div>
  );
}
