"use client";

import { useState } from 'react';
import Card3D, { FlipCard, FloatingElementsCard } from './Card3D';
import { ParticlesBackground, WavesBackground, GradientBackground, NoiseBackground } from './AnimatedBackground';
import ParallaxSection, { MultiLayerParallax, TextParallax } from './ParallaxSection';
import { ScrollProgressBar, MouseScrollIndicator, ArrowScrollIndicator, DotScrollIndicator } from './ScrollIndicator';
import AnimatedGif, { HoverGif, ClickGif } from './AnimatedGif';
import RotatingCube from './RotatingCube';
import useScrollAnimation, { useParallax, useTilt } from '../hooks/useScrollAnimation';

// Tabs for different effect demos
const EffectsShowcase = () => {
  const [activeTab, setActiveTab] = useState('3d');
  
  const tabs = [
    { id: '3d', label: '3D Effects' },
    { id: 'backgrounds', label: 'Backgrounds' },
    { id: 'scroll', label: 'Scroll Effects' },
    { id: 'parallax', label: 'Parallax' },
    { id: 'gifs', label: 'Animated GIFs' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ScrollProgressBar color="bg-purple-600" height="h-1" />
      
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Advanced Effects Showcase</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore a collection of 3D effects, animations, scrolling effects, and more for your Next.js website
        </p>
      </header>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content based on active tab */}
      <main className="container mx-auto px-4 pb-20">
        {activeTab === '3d' && <ThreeDEffects />}
        {activeTab === 'backgrounds' && <BackgroundEffects />}
        {activeTab === 'scroll' && <ScrollEffects />}
        {activeTab === 'parallax' && <ParallaxEffects />}
        {activeTab === 'gifs' && <GifEffects />}
      </main>
    </div>
  );
};

// 3D Effects showcase
const ThreeDEffects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">3D Effects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3D Tilt Card */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">3D Tilt Card</h3>
          <Card3D className="w-full h-64 bg-gradient-to-br from-purple-900 to-indigo-900">
            <div className="flex flex-col items-center justify-center h-full">
              <h4 className="text-xl font-bold mb-2">Hover Me</h4>
              <p className="text-center text-gray-300">
                Move your mouse over this card to see the 3D tilt effect
              </p>
            </div>
          </Card3D>
        </div>
        
        {/* Flip Card */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Flip Card</h3>
          <div className="h-64 w-full">
            <FlipCard
              front={
                <div className="h-full w-full bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center p-6 rounded-xl">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">Click Me</h4>
                    <p className="text-gray-300">Click to flip this card</p>
                  </div>
                </div>
              }
              back={
                <div className="h-full w-full bg-gradient-to-br from-pink-900 to-red-900 flex items-center justify-center p-6 rounded-xl">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">Back Side</h4>
                    <p className="text-gray-300">Click again to flip back</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        
        {/* Rotating Cube */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Rotating Cube</h3>
          <div className="flex justify-center">
            <RotatingCube 
              size={180}
              images={[
                '/placeholder-image-1.jpg', // Replace with actual image paths
                '/placeholder-image-2.jpg',
                '/placeholder-image-3.jpg',
                '/placeholder-image-4.jpg',
                '/placeholder-image-5.jpg',
                '/placeholder-image-6.jpg',
              ]}
            />
          </div>
        </div>
        
        {/* Floating Elements Card */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Floating Elements</h3>
          <FloatingElementsCard className="w-full h-64 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl">
            <div className="flex flex-col items-center justify-center h-full">
              <h4 className="text-xl font-bold mb-2">Floating Effects</h4>
              <p className="text-center text-gray-300">
                Notice the animated elements floating in the background
              </p>
            </div>
          </FloatingElementsCard>
        </div>
        
        {/* Morphing Shape */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Morphing Shape</h3>
          <div className="w-full h-64 flex items-center justify-center">
            <div className="morph-shape w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600"></div>
          </div>
        </div>
        
        {/* 3D Button */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">3D Button</h3>
          <div className="w-full h-64 flex items-center justify-center">
            <button className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-lg transform transition-transform duration-300 active:scale-95 hover:translate-y-[-3px] active:translate-y-[0px] shadow-lg hover:shadow-purple-500/30">
              <span>Click Me</span>
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10"></div>
              <div className="absolute inset-0 translate-y-2 rounded-xl opacity-20 bg-black blur-sm"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Background Effects showcase
const BackgroundEffects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Animated Backgrounds</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Particles Background */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Particles Network</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
            <ParticlesBackground
              particleCount={30}
              particleColor="#ffffff"
              linkColor="#ffffff"
              speed={0.5}
              opacity={0.7}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                <h4 className="text-xl font-bold mb-2">Interactive Particles</h4>
                <p className="text-gray-300">Connected nodes with subtle animation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Waves Background */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Animated Waves</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
            <WavesBackground
              waveCount={4}
              baseColor="#4338ca" 
              speed={1.5}
              amplitude={30}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                <h4 className="text-xl font-bold mb-2">Wave Animation</h4>
                <p className="text-gray-300">Dynamic flowing wave patterns</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient Background */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Animated Gradient</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
            <GradientBackground
              colors={['#4338ca', '#7c3aed', '#3b82f6', '#8b5cf6']}
              speed={2}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                <h4 className="text-xl font-bold mb-2">Flowing Gradients</h4>
                <p className="text-gray-300">Smoothly transitioning color gradients</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Noise Background */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Noise Effect</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800">
            <div className="absolute inset-0 bg-gray-900"></div>
            <NoiseBackground opacity={0.05} speed={5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
                <h4 className="text-xl font-bold mb-2">Static Noise</h4>
                <p className="text-gray-300">Subtle TV static effect overlay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scroll Effects showcase
const ScrollEffects = () => {
  // Use our custom hooks for scroll animations
  const fadeIn = useScrollAnimation({ animation: 'fade-in', delay: 0 });
  const fadeInUp = useScrollAnimation({ animation: 'fade-in-up', delay: 200 });
  const fadeInLeft = useScrollAnimation({ animation: 'fade-in-left', delay: 400 });
  const fadeInRight = useScrollAnimation({ animation: 'fade-in-right', delay: 600 });
  const zoomIn = useScrollAnimation({ animation: 'zoom-in', delay: 800 });
  
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Scroll Effects</h2>
      
      <div className="space-y-36">
        {/* Fade In */}
        <div ref={fadeIn.ref} className={`py-12 ${fadeIn.animationClass}`}>
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">Fade In</h3>
            <p className="text-gray-300 text-center">
              This element simply fades in as it enters the viewport
            </p>
          </div>
        </div>
        
        {/* Fade In Up */}
        <div ref={fadeInUp.ref} className={`py-12 ${fadeInUp.animationClass}`}>
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">Fade In Up</h3>
            <p className="text-gray-300 text-center">
              This element fades in while moving upward as it enters the viewport
            </p>
          </div>
        </div>
        
        {/* Fade In Left & Right */}
        <div className="flex flex-col md:flex-row gap-8 py-12">
          <div ref={fadeInLeft.ref} className={`flex-1 ${fadeInLeft.animationClass}`}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-2xl font-semibold mb-4 text-center">Fade In Left</h3>
              <p className="text-gray-300 text-center">
                This element enters from the right side
              </p>
            </div>
          </div>
          
          <div ref={fadeInRight.ref} className={`flex-1 ${fadeInRight.animationClass}`}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-2xl font-semibold mb-4 text-center">Fade In Right</h3>
              <p className="text-gray-300 text-center">
                This element enters from the left side
              </p>
            </div>
          </div>
        </div>
        
        {/* Zoom In */}
        <div ref={zoomIn.ref} className={`py-12 ${zoomIn.animationClass}`}>
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">Zoom In</h3>
            <p className="text-gray-300 text-center">
              This element zooms in as it enters the viewport
            </p>
          </div>
        </div>
        
        {/* Scroll Indicators */}
        <div className="py-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Scroll Indicators</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-4">Mouse Indicator</h4>
              <MouseScrollIndicator />
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-4">Arrow Indicator</h4>
              <ArrowScrollIndicator />
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-4">Section Dots</h4>
              <div className="relative h-40 flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  Look for the dots on the right side of the page
                </p>
                <DotScrollIndicator sections={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parallax Effects showcase
const ParallaxEffects = () => {
  const { ref: parallaxTextRef, style: parallaxTextStyle } = useParallax(0.2);
  
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Parallax Effects</h2>
      
      <div className="space-y-24">
        {/* Simple Parallax Text */}
        <div className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Parallax Text</h3>
          <div 
            ref={parallaxTextRef} 
            style={parallaxTextStyle}
            className="text-5xl font-bold text-center text-gradient-animate"
          >
            Scroll to see this text move
          </div>
        </div>
        
        {/* Multi-speed Text */}
        <div className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Multi-Speed Text</h3>
          <TextParallax 
            text="Each word in this sentence moves at a different speed as you scroll the page" 
            className="text-3xl font-bold text-center"
          />
        </div>
        
        {/* Image Parallax */}
        <div className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Image Parallax</h3>
          <div className="h-96 relative overflow-hidden rounded-xl">
            <ParallaxSection
              backgroundImage="/placeholder-background.jpg" // Replace with actual image path
              backgroundSpeed={0.3}
              height="100%"
              overlayColor="rgba(0, 0, 0, 0.4)"
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mb-4">Parallax Background</h4>
                  <p className="text-xl max-w-lg mx-auto">
                    The background image moves at a different speed than the content
                  </p>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
        
        {/* Multi-layer Parallax */}
        <div className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Multi-Layer Parallax</h3>
          <div className="h-96 relative overflow-hidden rounded-xl">
            <MultiLayerParallax
              layers={[
                { image: '/placeholder-back.jpg', speed: 0.1, opacity: 1 },  // Replace with actual image paths
                { image: '/placeholder-middle.jpg', speed: 0.3, opacity: 0.8 },
                { image: '/placeholder-front.jpg', speed: 0.5, opacity: 0.6 }
              ]}
              className="h-full"
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                  <h4 className="text-4xl font-bold mb-4">Depth Effect</h4>
                  <p className="text-xl max-w-lg mx-auto">
                    Multiple layers moving at different speeds create depth
                  </p>
                </div>
              </div>
            </MultiLayerParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

// GIF Effects showcase
const GifEffects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Animated GIF Effects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Simple GIF with fade-in effect */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Fade-In Effect</h3>
          <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <AnimatedGif
              src="/sample.gif" // Replace with actual GIF path
              alt="Sample Animation"
              width={500}
              height={280}
              effect="fade"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 mt-4 text-center">
            GIF with smooth fade-in effect when it enters the viewport
          </p>
        </div>
        
        {/* Hover to play GIF */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Hover to Play</h3>
          <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <HoverGif
              staticSrc="/static-image.jpg" // Replace with actual image paths
              gifSrc="/animated.gif"
              alt="Hover to animate"
              width={500}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 mt-4 text-center">
            Hover over the image to see the animation
          </p>
        </div>
        
        {/* Click to play GIF */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Click to Play</h3>
          <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <ClickGif
              src="/animated-click.mp4" // Replace with actual video path
              alt="Click to play animation"
              width={500}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 mt-4 text-center">
            Click the image to play/pause the animation
          </p>
        </div>
        
        {/* GIF with zoom effect */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Zoom Effect</h3>
          <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <AnimatedGif
              src="/zoom-animation.gif" // Replace with actual GIF path
              alt="Zoom Animation"
              width={500}
              height={280}
              effect="zoom"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-400 mt-4 text-center">
            GIF with zoom-in effect when it enters the viewport
          </p>
        </div>
      </div>
    </section>
  );
};

export default EffectsShowcase;