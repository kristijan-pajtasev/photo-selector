import { Loader2 } from 'lucide-react';

interface LoadingIndicatorProps {
  size?: number;
  className?: string;
}

export function LoadingIndicator({ size = 48, className }: LoadingIndicatorProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader2 className="animate-spin text-primary" style={{ width: size, height: size }} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
