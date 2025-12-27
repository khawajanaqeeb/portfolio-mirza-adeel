"use client";

import BackgroundImage from "./BackgroundImage";

interface BackgroundSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  overlayOpacity?: number;
  className?: string;
  priority?: boolean;
  minHeight?: string;
  objectPosition?: string;
  animate?: boolean;
}

export default function BackgroundSection({
  backgroundImage,
  children,
  overlayOpacity = 0.5,
  className = "",
  priority = false,
  minHeight = "100vh",
  objectPosition = "center",
  animate = false,
}: BackgroundSectionProps) {
  return (
    <section
      className={`background-section ${className}`}
      style={{ minHeight }}
    >
      <BackgroundImage
        src={backgroundImage}
        alt="Background"
        priority={priority}
        objectPosition={objectPosition}
        animate={animate}
      />
      <div
        className="background-overlay"
        style={{ background: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="background-content">
        {children}
      </div>
    </section>
  );
}
