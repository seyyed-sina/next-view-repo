export interface Repo {
  name: string;
  updated_at: string;
  owner: { login: string };
  zipball_url: string;
}
