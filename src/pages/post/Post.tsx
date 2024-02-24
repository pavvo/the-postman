import { Link, useParams } from "react-router-dom";

import { RoutePaths } from "@/router/RoutePaths";

import { Post as SinglePost } from "@/components/Post";

import { usePost } from "./hooks/usePost";

export function Post() {
  const { postId } = useParams();

  const { post, comments, user, isLoading, error } = usePost(postId as string);

  console.log(post, comments);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post || !comments || !user) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <Link
        to={RoutePaths.ROOT}
        style={{
          display: "block",
          marginBottom: "10px",
          color: "#2196f3",
        }}>
        Back to posts
      </Link>
      <SinglePost post={post} comments={comments} user={user} />
    </div>
  );
}
