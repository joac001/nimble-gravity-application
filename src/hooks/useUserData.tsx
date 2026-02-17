import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '../utils';
import type { User } from '../types';

export default function useUserData() {
  const email = import.meta.env.VITE_EMAIL;
  const userQuery = useQuery({
    queryKey: ['user', email],
    queryFn: () =>
      apiRequest<User>({ method: 'get', url: '/api/candidate/get-by-email', params: { email } }),
    enabled: !!email,
  });
  return {
    userData: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    isErrorUser: userQuery.isError,
    errorUser: userQuery.error,
  };
}
