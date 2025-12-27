"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BackgroundImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  animate?: boolean;
}

// Simple blur data URL for placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2a2a2a" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a1a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function BackgroundImage({
  src,
  alt,
  priority = false,
  className = "",
  objectPosition = "center",
  animate = false,
}: BackgroundImageProps) {
  if (animate) {
    return (
      <motion.div
        className={`background-image-wrapper ${className}`}
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut" as const,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={75}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: objectPosition,
          }}
        />
      </motion.div>
    );
  }

  return (
    <div className={`background-image-wrapper ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={75}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: objectPosition,
        }}
      />
    </div>
  );
}
