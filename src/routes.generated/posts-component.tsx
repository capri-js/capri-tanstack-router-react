import { Outlet, useMatch } from "@tanstack/react-router";
import { routeConfig } from "../routes.generated/posts";
import * as $postId from "../routes.generated/posts/$postId";
function Posts() {
  const {
    loaderData: {
      posts
    },
    Link
  } = useMatch(routeConfig.id);
  return <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {posts?.map(post => {
        return <li key={post.id} className="whitespace-nowrap">
              <Link to={$postId.routeConfig.id} params={{
            postId: post.id
          }} className="block py-1 text-blue-800 hover:text-blue-600" activeProps={{
            className: "text-black font-bold"
          }}>
                <div>{post.title.substring(0, 20)}</div>
              </Link>
            </li>;
      })}
      </ul>
      <hr />
      <Outlet />
    </div>;
}
export const component = Posts;