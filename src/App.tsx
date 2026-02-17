import { JobCard } from './components';
import { Loader2 } from 'lucide-react';
import { useUserData, useJobsData } from './hooks';

export default function App() {
  const { userData, isLoadingUser, isErrorUser, errorUser } = useUserData();
  const { jobs, isLoadingJobs, isErrorJobs, errorJobs } = useJobsData();

  const onError = () => {
    if (isErrorUser) {
      return (
        <div className="text-error text-center bg-error/10 p-4 rounded-lg">
          Error loading user data:{' '}
          {errorUser instanceof Error ? errorUser.message : 'Unknown error'}
        </div>
      );
    }

    if (isErrorJobs) {
      return (
        <div className="text-error text-center bg-error/10 p-4 rounded-lg">
          Error loading jobs data:{' '}
          {errorJobs instanceof Error ? errorJobs.message : 'Unknown error'}
        </div>
      );
    }

    return null;
  };

  return (
    <main className="flex lg:px-8 items-center justify-center bg-background text-primary w-screen min-h-dvh py-8 px-4 antialiased">
      {isErrorUser || isErrorJobs ? (
        onError()
      ) : isLoadingJobs || isLoadingUser ? (
        <div className="flex items-center justify-center">
          <Loader2 className="size-10 animate-spin" />
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs?.map(job => (
            <JobCard key={job.id} job={job} user={userData} />
          ))}
        </section>
      )}
    </main>
  );
}
