"use client";

import { useEffect } from "react";
import "@/styles/particles.css";

declare global {
  interface Window {
    particlesJS: (id: string, options: ParticlesConfig) => void;
  }
}

interface ParticlesConfig {
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        value_area: number;
      };
    };
    color: { value: string };
    shape: {
      type: string;
      stroke: { width: number; color: string };
      polygon: { nb_sides: number };
      image: { src: string; width: number; height: number };
    };
    opacity: {
      value: number;
      random: boolean;
      anim: { enable: boolean; speed: number; opacity_min: number; sync: boolean };
    };
    size: {
      value: number;
      random: boolean;
      anim: { enable: boolean; speed: number; size_min: number; sync: boolean };
    };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
    move: {
      enable: boolean;
      speed: number;
      direction: string;
      random: boolean;
      straight: boolean;
      out_mode: string;
      bounce: boolean;
      attract: { enable: boolean; rotateX: number; rotateY: number };
    };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: { enable: boolean; mode: string };
      onclick: { enable: boolean; mode: string };
      resize: boolean;
    };
    modes: {
      grab: { distance: number; line_linked: { opacity: number } };
      bubble: { distance: number; size: number; duration: number; opacity: number; speed: number };
      repulse: { distance: number; duration: number };
      push: { particles_nb: number };
      remove: { particles_nb: number };
    };
  };
  retina_detect: boolean;
}

const Particles = () => {
  useEffect(() => {
    const loadParticlesScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        // Aguarda um curto período para garantir que o elemento esteja no DOM
        setTimeout(() => initializeParticles(), 100);
      };
      document.body.appendChild(script);
    };

    const initializeParticles = () => {
      const particlesContainer = document.getElementById("particles-js");

      if (particlesContainer && typeof window.particlesJS !== "undefined") {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 500, density: { enable: true, value_area: 900 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 4,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 8,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 0.5 } },
              bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    };

    loadParticlesScript();

    return () => {
      const scripts = document.querySelectorAll('script[src*="particles.min.js"]');
      for (const script of scripts) {
        script.parentNode?.removeChild(script);
      }
    };
  }, []);

  return <div id="particles-js" className="absolute top-0 left-0 w-full h-full -z-10"/>;
};

export default Particles;
