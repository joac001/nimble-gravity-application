const GITHUB_REPO_PATTERN = /^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+\/?$/;

export default function validateGitHubRepoURL(value: string): {
  valid: boolean;
  error: string | null;
} {
  const trimmed = value.trim();
  if (trimmed === '') return { valid: false, error: null };

  // Detect missing or wrong protocol before parsing
  if (!/^https?:\/\//i.test(trimmed)) {
    return { valid: false, error: 'URL must start with https://' };
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return { valid: false, error: 'Please enter a valid URL.' };
  }

  if (parsed.protocol !== 'https:') {
    return { valid: false, error: 'URL must use HTTPS, not HTTP.' };
  }

  if (parsed.hostname !== 'github.com') {
    return { valid: false, error: 'URL must be a GitHub repository.' };
  }

  if (!GITHUB_REPO_PATTERN.test(trimmed)) {
    return { valid: false, error: 'URL must follow the format https://github.com/user/repo' };
  }

  return { valid: true, error: null };
}
