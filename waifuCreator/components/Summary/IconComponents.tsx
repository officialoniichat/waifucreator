import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconRendererProps {
  Icon: LucideIcon | null;
  color: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ Icon, color }) => {
  if (!Icon) return null;
  return <Icon size={24} className={color} />;
};