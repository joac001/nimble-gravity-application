import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../utils';
import type { JobApplication } from '../types';

interface UseApplyToJobOptions {
  onError?: (err: Error) => void;
}

export default function useApplyToJob(options?: UseApplyToJobOptions) {
  return useMutation({
    mutationFn: (params: JobApplication) =>
      apiRequest<void>({ method: 'post', url: '/api/jobs/apply', data: params }),
    onError: options?.onError,
  });
}
