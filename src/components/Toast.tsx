import { X } from 'lucide-react';

export type ToastType = 'error' | 'success';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const styles: Record<ToastType, string> = {
  error: 'bg-error/15 text-error border-error/30',
  success: 'bg-success/15 text-success border-success/30',
};

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-sm shadow-lg animate-fade-in ${styles[type]}`}
    >
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="shrink-0 hover:opacity-70">
        <X className="size-4" />
      </button>
    </div>
  );
}
