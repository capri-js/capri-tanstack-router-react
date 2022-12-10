import { useMatch } from "@tanstack/react-router";
import { routeConfig } from "../../routes.generated/posts/$postId";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export const tanner = "foo";

routeConfig.generate({
  component: Post,
  loader: async ({ params: { postId } }) => {
    return {
      post: await fetchPostById(postId),
    };
  },
});

async function fetchPostById(postId: string) {
  console.log(`Fetching post with id ${postId}...`);
  //await new Promise((r) => setTimeout(r, Math.round(Math.random() * 300)));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    (r) => r.json() as Promise<PostType>
  );
}

function Post() {
  const {
    loaderData: { post },
  } = useMatch(routeConfig.id);

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  );
}
