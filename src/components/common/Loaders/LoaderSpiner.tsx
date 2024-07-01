'use client';

import { useEffect } from 'react';

interface LoaderSpinerProps {
  color?: string;
  size?: number;
  speed?: number;
}

export default function LoaderSpiner({
  color = 'lightgray',
  size = 18,
  speed = 0.9,
}: LoaderSpinerProps) {
  useEffect(() => {
    async function getLoader() {
      const { dotSpinner } = await import('ldrs');
      dotSpinner.register();
    }
    getLoader();
  }, []);
  return (
    <l-dot-spinner color={color} size={size} speed={speed}></l-dot-spinner>
  );
}
