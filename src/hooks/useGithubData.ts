import { useQuery } from "@tanstack/react-query";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface GithubUser {
  login: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GITHUB_USERNAME = "JithinGK51";

const fetchGithubUser = async (): Promise<GithubUser> => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!res.ok) throw new Error("Failed to fetch GitHub user");
  return res.json();
};

const fetchGithubRepos = async (): Promise<GithubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
};

export const useGithubData = () => {
  const userQuery = useQuery({
    queryKey: ["github-user"],
    queryFn: fetchGithubUser,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const reposQuery = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGithubRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const topLanguages = reposQuery.data
    ? Object.entries(
        reposQuery.data.reduce((acc, repo) => {
          if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      )
        .sort(([, a], [, b]) => b - a)
        .slice(0, 6)
    : [];

  return { user: userQuery, repos: reposQuery, topLanguages };
};
