import { Post } from "./types/post";
import { TeamMember } from "./types/team-member";

const baseAPI = `http://localhost:1337/api`;

export async function getTeam(): Promise<TeamMember[]> {
  const response = await fetch(`${baseAPI}/members?populate=*`);
  const data = await response.json();
  return data.data;
}

export async function getTeamMember(username: string): Promise<TeamMember> {
  const response = await fetch(
    `${baseAPI}/members?filters[username]=${username}&[populate]=*`
  );
  const data = await response.json();
  return data.data[0];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(
    `${baseAPI}/posts?filters[slug]=${slug}&[populate]=*`
  );
  const data = await response.json();
  return data.data[0];
}

export async function getPosts() {
  const response = await fetch(`${baseAPI}/posts?populate=*`);
  const data = await response.json();
  return data.data;
}
