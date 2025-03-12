/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        'primary': {
          DEFAULT: '#7C3AED', // purple-600
          light: '#A78BFA', // purple-400
          dark: '#6D28D9', // purple-700
        },
        'secondary': {
          DEFAULT: '#4F46E5', // indigo-600
          light: '#818CF8', // indigo-400
          dark: '#4338CA', // indigo-700
        },
      },
      animation: {
        // Basic animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        
        // Advanced animations
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 0.5s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'zoom-in': 'zoomIn 1s ease-out',
        'slide-in-bottom': 'slideInBottom 1s ease-out',
        
        // 3D animations
        'flip-x': 'flipX 2s infinite',
        'flip-y': 'flipY 2s infinite',
        'rotate-3d': 'rotate3d 5s infinite linear',
        'swing': 'swing 2s ease-in-out infinite',
        
        // Scrolling indicators
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'mouse-scroll': 'mouseScroll 2.5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        flipX: {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(180deg)' },
        },
        flipY: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        rotate3d: {
          '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(10px)', opacity: '0.2' },
        },
        mouseScroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.2' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // For 3D effects
      perspective: {
        'none': 'none',
        'sm': '250px',
        'md': '500px',
        'lg': '1000px',
        'xl': '2000px',
      },
      transformStyle: {
        'flat': 'flat',
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
      translate: {
        // For more specific 3D translations
        'z-0': '0',
        'z-10': '10px',
        'z-20': '20px',
        'z-30': '30px',
        'z-40': '40px',
        'z-50': '50px',
        'z-100': '100px',
      }
    },
  },
  plugins: [],
};