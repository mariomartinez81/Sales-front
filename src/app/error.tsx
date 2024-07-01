'use client';
import ErrorLayout from '@/layouts/ErrorLayout';

interface ErrorPrincipalPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPrincipalPage = ({ error, reset }: ErrorPrincipalPageProps) => {
  return <ErrorLayout error={new Error('Error: Something went wrong')} />;
};

export default ErrorPrincipalPage;
