import React from 'react';
import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  wrap?: string;
  color?: string;
  onClick?: () => void;
}

const LucideIcon = ({
  name,
  className,
  size,
  wrap,
  color,
  onClick,
}: IconProps) => {
  // @ts-ignore
  const Icon = icons[name];
  if (!Icon) {
    console.error(`Icon "${name}" does not exist in lucide-react.`);
    return null;
  }

  return (
    <>
      {wrap ? (
        <div className={`flex items-center ${wrap}`}>
          <Icon
            className={className}
            color={color}
            size={size}
            onClick={onClick}
          />
        </div>
      ) : (
        <Icon
          className={className}
          color={color}
          size={size}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default LucideIcon;
