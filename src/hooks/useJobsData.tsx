import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../utils';
import type { Job } from '../types';

export default function useJobsData() {
  const jobsQuery = useQuery({
    queryKey: ['jobs'],
    queryFn: () => apiRequest<Job[]>({ method: 'get', url: '/api/jobs/get-list' }),
  });

  return {
    jobs: jobsQuery.data,
    isLoadingJobs: jobsQuery.isLoading,
    isErrorJobs: jobsQuery.isError,
    errorJobs: jobsQuery.error,
  };
}
