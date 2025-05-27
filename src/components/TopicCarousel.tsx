"use client";
import { useState, useEffect, useRef } from 'react';
import meetings from '../data/meetings.json';

export default function TopicCarousel() {
  const images = meetings.map(({ filename, alt, title }) => ({
    src: `/topics/${filename}`,
    alt,
    title
  }));
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * images.length)
  );
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Swipe handling refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const delay = 8000; // autoplay delay in ms

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
      {images.map(({ src, alt, title }, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          {/* Title overlay */}
          <div className={`
						absolute text-white/90 text-sm px-2 py-1
						bg-black/60 backdrop-blur-sm
						max-w-full truncate

						bottom-0 w-full text-center
						sm:top-2 sm:left-2 sm:bottom-auto sm:w-auto sm:text-left

						rounded-b-lg sm:rounded-md
					`}>
            {title}
          </div>
        </div>
      ))}


      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:block absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white/80 rounded-full p-2 hover:bg-black/80 transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:block absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white/80 rounded-full p-2 hover:bg-black/80 transition"
      >
        ›
      </button>
    </div>
  );
}
