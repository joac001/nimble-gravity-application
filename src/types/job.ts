export type Job = {
  id: string;
  title: string;
};

export type JobApplication = {
  userid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
};
