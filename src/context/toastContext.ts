import { createContext } from 'react';
import type { ToastType } from '../components/Toast';

export interface ToastContextValue {
  addToast: (message: string, type: ToastType) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
