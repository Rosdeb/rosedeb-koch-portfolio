"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Code2, Mail, ArrowRight, Smartphone } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "rgba(88, 166, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(88, 166, 255, ${0.2 * (1 - dist / 150)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6 overflow-hidden">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Rosdeb Koch
              </h1>
            </div>

            <div className="mb-6 overflow-hidden">
              <h2 className={`text-xl sm:text-2xl md:text-3xl text-primary font-light transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Mobile Application Developer
              </h2>
            </div>

            <div className="mb-8 overflow-hidden">
              <p className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Crafting exceptional mobile experiences with Flutter, Kotlin, Java, and Swift. Transforming ideas into
                elegant, performant applications.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="#projects"
                className="group px-8 py-4 bg-white text-slate-900 rounded-full font-semibold transition-all duration-300 hover:bg-slate-100 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-100"
              >
                <span className="flex items-center gap-2">
                  <Code2 size={20} />
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white transition-all duration-300 hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-100"
              >
                <span className="flex items-center gap-2">
                  <Mail size={20} />
                  Get in Touch
                </span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white shadow-2xl w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/rosdebkoch12.jpeg"
                  alt="ROSDEB KOCH - Mobile Developer"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0ms' }}>
                <span className="text-white text-sm">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1000ms' }}>
                <span className="text-white text-sm">💻</span>
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-6 w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '500ms' }}>
                <span className="text-white text-xs">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}