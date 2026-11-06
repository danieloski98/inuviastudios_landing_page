'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  dotColor?: string;
  archColor?: string;
  badge?: boolean;
  badgeColor?: 'midnight' | 'violet' | 'mint' | 'cloud' | 'ink' | 'white' | 'transparent';
}

export const GatewayIcon: React.FC<{
  className?: string;
  dotColor?: string;
  archColor?: string;
  sizePx?: number;
}> = ({ className = 'w-8 h-8', dotColor, archColor, sizePx }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={sizePx ? { width: sizePx, height: sizePx } : undefined}
      aria-hidden="true"
    >
      {/* Gateway Dot */}
      <circle
        cx="50"
        cy="19"
        r="7.5"
        fill={dotColor || '#3DDBB0'}
      />
      {/* Gateway Arch */}
      <path
        d="M 31 84 V 52 C 31 39 39.5 33 50 33 C 60.5 33 69 39 69 52 V 84"
        stroke={archColor || '#F4F5FB'}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  withText = true,
  dotColor,
  archColor,
  badge = true,
  badgeColor = 'midnight',
}) => {
  const sizeMap = {
    sm: { iconPx: 20, badgePx: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { iconPx: 26, badgePx: 'w-10 h-10', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { iconPx: 36, badgePx: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-xs' },
    xl: { iconPx: 50, badgePx: 'w-20 h-20', textTitle: 'text-3xl', textSub: 'text-sm' },
  };

  const badgeBgClasses: Record<string, string> = {
    midnight: 'bg-[#1B1F4B] text-[#F4F5FB] shadow-sm',
    violet: 'bg-[#5B4BFF] text-[#F4F5FB] shadow-sm',
    mint: 'bg-[#3DDBB0] text-[#0E1030] shadow-sm',
    cloud: 'bg-[#F4F5FB] dark:bg-[#151940] text-[#0E1030] dark:text-[#F4F5FB] border border-[#E2E6F2] dark:border-[#262C6A]',
    white: 'bg-white dark:bg-[#151940] text-[#0E1030] dark:text-[#F4F5FB] border border-[#E2E6F2] dark:border-[#262C6A] shadow-sm',
    ink: 'bg-[#0E1030] text-[#F4F5FB] shadow-sm border border-[#262C6A]',
    transparent: 'bg-transparent text-inherit',
  };

  const config = sizeMap[size];

  let effectiveDot = dotColor || '#3DDBB0';
  let effectiveArch = archColor || '#F4F5FB';

  const iconElement = (
    <GatewayIcon
      sizePx={config.iconPx}
      dotColor={effectiveDot}
      archColor={effectiveArch}
    />
  );

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {badge ? (
        <div
          className={`${config.badgePx} rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-200 ${badgeBgClasses[badgeColor] || ''}`}
        >
          {iconElement}
        </div>
      ) : (
        <div className="shrink-0 flex items-center justify-center">
          {iconElement}
        </div>
      )}

      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading font-extrabold tracking-tight lowercase text-[#0E1030] dark:text-[#F4F5FB] transition-colors ${config.textTitle}`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            inuvia
          </span>
          <span
            className={`font-mono uppercase font-bold tracking-[0.28em] mt-1 text-[#5B4BFF] dark:text-[#3DDBB0] transition-colors ${config.textSub}`}
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            STUDIOS
          </span>
        </div>
      )}
    </div>
  );
};
