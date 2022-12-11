import { PostType } from "./posts/$postId";
async function fetchPosts() {
  console.log("Fetching posts...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json() as PostType[]);
  return posts.slice(0, 10);
}
export const loader = async () => {
  return {
    posts: await fetchPosts()
  };
};