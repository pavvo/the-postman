import { useFetch } from "@/hooks/useFetch";
import { Comment, Post, User } from "@/pages/posts/hooks/usePosts";

export const usePost = (postId: string) => {
  const postFetch = useFetch<Post>("/posts/" + postId);
  const commentsFetch = useFetch<Comment[]>("/posts/" + postId + "/comments");

  const { data: post, isLoading: postLoading, error: postError } = postFetch;
  const { data: comments, isLoading: commentsLoading, error: commentsError } = commentsFetch;

  const userId = post?.userId;
  const userFetch = useFetch<User>("/users/" + userId, {}, !userId);

  const { data: user, isLoading: userLoading, error: userError } = userFetch;

  return {
    post,
    comments,
    user,
    isLoading: postLoading || commentsLoading || userLoading,
    error: postError || commentsError || userError || null,
  };
};
