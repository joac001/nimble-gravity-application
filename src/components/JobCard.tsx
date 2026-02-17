import { useState } from 'react';
import { Check, X, Loader2 } from 'lucide-react';
import { Button, Card, URLInput } from './';
import { useApplyToJob, useToast } from '../hooks';
import { validateGitHubRepoURL } from '../utils';
import type { Job, User } from '../types';

interface JobCardProps {
  job: Job;
  user?: User;
}

export default function JobCard({ job, user }: JobCardProps) {
  const [url, setUrl] = useState('');
  const { addToast } = useToast();
  const { mutate, isPending, isSuccess, isError, reset } = useApplyToJob({
    onError: err => addToast(err.message, 'error'),
  });

  const { valid: isValid, error: urlError } = validateGitHubRepoURL(url);

  const handleUrlChange = (value: string) => {
    setUrl(value);
    if (isSuccess || isError) reset();
  };

  const handleApply = () => {
    if (!user) return;
    mutate({
      uuid: user.uuid,
      jobId: job.id,
      candidateId: user.candidateId,
      repoUrl: url.trim(),
    });
  };

  const showResult = isSuccess || isError;

  return (
    <Card title={job.title} subtitle="Apply to this job with your Github repo">
      <div className="flex gap-2">
        <URLInput value={url} onChange={handleUrlChange} error={urlError} />
        {showResult ? (
          <div
            className={`flex items-center justify-center size-10 shrink-0 rounded-full transition-colors ${
              isSuccess ? 'bg-success/15 text-success' : 'bg-error/15 text-error'
            }`}
          >
            {isSuccess ? <Check className="size-5" /> : <X className="size-5" />}
          </div>
        ) : (
          <Button
            onClick={handleApply}
            disabled={url.trim() === '' || !isValid || isPending}
            className="self-center"
          >
            {isPending ? <Loader2 className="size-5 animate-spin" /> : 'Apply'}
          </Button>
        )}
      </div>
      {urlError != null ? (
        <span className="text-error text-xs font-normal leading-normal text-pretty">
          {urlError}
        </span>
      ) : (
        <span className="text-muted-contrast text-xs font-normal leading-normal text-pretty">
          {url ? url : 'Enter the URL of your GitHub repository'}
        </span>
      )}
    </Card>
  );
}
