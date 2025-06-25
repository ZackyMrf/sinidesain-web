import React from 'react';
import Image from 'next/image';

interface LogoProps {
  iconSize?: number; 
  size?: number;
  className?: string;
  showText?: boolean;
  textColor?: string;
  variant?: 'default' | 'white';
}

export const SiniDesainLogo: React.FC<LogoProps> = ({ 
  size = 40, 
  iconSize = 50,
  className = "", 
  showText = true,
  textColor = "text-gray-900",
  variant = 'default'
}) => {
  const logoSrc = variant === 'white' ? '/siniputih.png' : '/sinifixxx.png';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Image
          src={logoSrc}
          alt="SiniDesain Logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span 
          className={`font-bold ${textColor}`}
          style={{ fontSize: size * 0.5 }}
        >
          SiniDesain
        </span>
      )}
    </div>
  );
};

export default SiniDesainLogo;
