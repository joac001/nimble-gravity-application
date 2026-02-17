import { JobCard } from './components';
import type { Job } from './types/job';

export default function App() {
  const jobs: Job[] = [
    { id: '1', title: 'Software Engineer' },
    { id: '2', title: 'Data Scientist' },
    { id: '3', title: 'Product Manager' },
    { id: '4', title: 'UX Designer' },
    { id: '5', title: 'DevOps Engineer' },
    { id: '6', title: 'Backend Developer' },
    { id: '7', title: 'Frontend Developer' },
    { id: '8', title: 'QA Engineer' },
  ];

  return (
    <main className="lg:px-8 items-start justify-center bg-background text-primary w-screen min-h-dvh py-8 px-4 antialiased">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map(job => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
    </main>
  );
}
