'use client';

import { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  // Lock body scroll when preview is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    const video = videoRef.current;
    if (video) {
      playPromiseRef.current = video.play();
      playPromiseRef.current?.catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Video play error:', error);
        }
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    const video = videoRef.current;
    if (video && playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          video.pause();
          video.currentTime = 0;
        })
        .catch(() => {
          // Ignore errors
        });
    }
  };

  // Handle click for mobile, mouseenter for desktop
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpen) {
      handleOpen();
    }
  };

  return (
    <>
      {/* Card Preview */}
      <div 
        ref={containerRef}
        className="relative aspect-video bg-zinc-100 cursor-pointer overflow-hidden group"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Play video preview"
      >
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
        
        {/* Play icon overlay - shows when not open */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-200">
            {/* Larger touch target for mobile */}
            <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 sm:w-8 sm:h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Enlarged Floating Preview Portal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ 
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={handleClose}
        >
          {/* Backdrop - no blur on mobile for performance */}
          <div 
            className="absolute inset-0 bg-black/70 sm:bg-black/60" 
            style={{ 
              backdropFilter: 'blur(0px)',
            }}
          />
          
          {/* Preview Window - Responsive sizing */}
          <div 
            className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden border-2 sm:border-4 border-blue-500 w-full max-w-[95vw] sm:max-w-[640px]"
            style={{ 
              animation: 'scaleIn 0.2s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/80"></div>
                  <div className="w-3 h-3 rounded-full bg-white/80"></div>
                  <div className="w-3 h-3 rounded-full bg-white/80"></div>
                </div>
                <span className="text-white text-sm font-medium">Video Preview</span>
              </div>
              
              {/* Close Button - Larger touch target for mobile */}
              <button
                onClick={handleClose}
                className="ml-auto p-2 sm:p-1.5 hover:bg-white/20 rounded-lg transition-colors active:scale-95"
                aria-label="Close preview"
              >
                <svg className="w-5 h-5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Video Container */}
            <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
              <video 
                className="w-full h-full object-contain"
                src={src}
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Playing indicator - Responsive sizing */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold flex items-center gap-1 sm:gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
                <span className="hidden sm:inline">PLAYING</span>
                <span className="sm:hidden">●</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Optimize animations for mobile */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
