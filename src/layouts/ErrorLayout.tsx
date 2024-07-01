'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorLayoutProps {
  error: Error;
  reset?: () => void;
}

const ErrorLayout = ({ error, reset }: ErrorLayoutProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-600">Error</h1>
        <p className="mt-2 text-2xl">¡Ups! Something went wrong.</p>
        <p className="mt-4 text-gray-600">
          {error.message || 'Ocurrió un error inesperado.'}
        </p>
        <button
          onClick={() => reset?.()}
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Intentar de nuevo
        </button>
        <Link href="/">
          <a className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorLayout;
