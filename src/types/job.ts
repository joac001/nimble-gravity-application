export type Job = {
  id: string;
  title: string;
};

export type JobApplication = {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
};
