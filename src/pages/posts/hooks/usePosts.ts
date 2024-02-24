import { useFetch } from "@/hooks/useFetch";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
}

export const usePosts = () => {
  const postsFetch = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
  const commentsFetch = useFetch<Comment[]>("https://jsonplaceholder.typicode.com/comments");
  const usersFetch = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  const { data: posts, isLoading: postsLoading, error: postsError } = postsFetch;
  const { data: comments, isLoading: commentsLoading, error: commentsError } = commentsFetch;
  const { data: users, isLoading: usersLoading, error: usersError } = usersFetch;

  if (!postsLoading && !commentsLoading && !usersLoading) {
    const usersById: Record<number, User> = {};
    users?.forEach((user) => {
      usersById[user.id] = user;
    });

    const commentsByPostId: Record<number, Comment[]> = {};
    comments?.forEach((comment) => {
      if (!commentsByPostId[comment.postId]) {
        commentsByPostId[comment.postId] = [];
      }
      commentsByPostId[comment.postId].push(comment);
    });
  }

  return {
    posts,
    comments,
    users,
    isLoading: postsLoading || commentsLoading || usersLoading,
    error: postsError || commentsError || usersError || null,
  };
};
