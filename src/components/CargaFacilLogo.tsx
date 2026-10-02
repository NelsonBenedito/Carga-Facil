import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'dark' | 'light' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CargaFacilTruckIcon: React.FC<{
  className?: string;
  color?: string;
  secondaryColor?: string;
}> = ({ className = 'w-9 h-9', color = '#00C896', secondaryColor }) => {
  return (
    <svg
      viewBox="0 0 450 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CargaFácil Ícone"
    >
      <g fill={color}>
        {/* Top speed streak */}
        <rect x="120" y="70" width="190" height="30" rx="15" />
        {/* Middle speed streak */}
        <rect x="85" y="115" width="130" height="30" rx="15" />
        {/* Bottom speed streak */}
        <rect x="55" y="160" width="100" height="30" rx="15" />
        
        {/* Truck Cargo Body */}
        <path
          d="M 210 100 
             L 310 70 
             C 320 67, 325 75, 325 85 
             L 305 200 
             C 305 205, 300 210, 290 210 
             L 160 210 
             C 150 210, 145 200, 150 190 
             L 170 155 
             L 225 155 
             C 235 155, 240 145, 240 135 
             L 245 100 
             Z"
        />

        {/* Chassis baseline */}
        <rect x="110" y="215" width="230" height="30" rx="15" />

        {/* Cab / Front Cabin */}
        <path
          d="M 315 120 
             L 355 120 
             C 365 120, 372 126, 376 136 
             L 392 185 
             C 395 192, 395 200, 395 210 
             L 395 240 
             C 395 245, 390 248, 385 248 
             L 330 248 
             L 315 180 
             Z"
        />

        {/* Wheels */}
        <circle cx="175" cy="245" r="32" />
        <circle cx="340" cy="245" r="32" />
      </g>

      {/* Wheel Hubs / cutout details */}
      <circle cx="175" cy="245" r="14" fill={secondaryColor || '#ffffff'} opacity="0.3" />
      <circle cx="340" cy="245" r="14" fill={secondaryColor || '#ffffff'} opacity="0.3" />
    </svg>
  );
};

export const CargaFacilLogo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  variant = 'dark',
  showSubtitle = false,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.22em]',
    xl: 'text-sm tracking-[0.25em]',
  };

  const isLight = variant === 'light' || variant === 'white';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <CargaFacilTruckIcon
          className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}
          color="#00C896"
          secondaryColor={isLight ? '#1F2937' : '#F8FAFC'}
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className={`font-bold font-['Poppins'] tracking-tight ${textSizes[size]}`}>
            <span className={isLight ? 'text-white' : 'text-[#1F2937]'}>Carga</span>
            <span className="text-[#00C896]">Fácil</span>
          </div>

          {showSubtitle && (
            <span
              className={`font-semibold uppercase text-[#64748B] mt-1 ${subtitleSizes[size]} ${
                isLight ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              Do carregamento à conferência
            </span>
          )}
        </div>
      )}
    </div>
  );
};
