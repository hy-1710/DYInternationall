import { SVGProps } from 'react';

export function BrandLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="46" stroke="#1a365d" strokeWidth="2.5" fill="white" />
      {/* Grid lines */}
      <path d="M 50 4 v 92 M 4 50 h 92" stroke="#1a365d" strokeWidth="1" strokeOpacity="0.4" />
      {/* Arch lines */}
      <ellipse cx="50" cy="50" rx="25" ry="46" stroke="#1a365d" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <ellipse cx="50" cy="50" rx="46" ry="25" stroke="#1a365d" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      
      {/* Green Leaf Structure */}
      <path d="M50 70 C 50 70, 45 40, 50 18 C 55 40, 50 70, 50 70 Z" fill="#228b22" />
      <path d="M50 55 C 50 55, 30 45, 20 25 C 40 25, 50 55, 50 55 Z" fill="#228b22" />
      <path d="M50 55 C 50 55, 70 45, 80 25 C 60 25, 50 55, 50 55 Z" fill="#228b22" />

      {/* DY text */}
      <text x="50" y="76" fontFamily="serif" fontSize="42" fontWeight="900" fill="#1a365d" textAnchor="middle" letterSpacing="-2">DY</text>
      
      {/* Molecule nodes */}
      <circle cx="35" cy="85" r="4" fill="#1a365d" />
      <circle cx="65" cy="80" r="4" fill="#228b22" />
      <circle cx="50" cy="90" r="3.5" fill="#1a365d" />
      <path d="M35 85 L 50 90 L 65 80" stroke="#1a365d" strokeWidth="2" />
    </svg>
  );
}
