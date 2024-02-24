import { Link } from "react-router-dom";

import type { Post, User, Comment as IComment } from "@/pages/posts/hooks/usePosts";

import { useAppContext } from "@/hooks/useAppContext";
import { useLogger } from "@/hooks/useLogger";

import { Comment } from "./Comment";

import "./Post.css";

export interface PostProps {
  post: Post;
  user?: User;
  comments?: Array<IComment>;
}

export function Post({ post, user, comments }: PostProps) {
  const { defaultMessage } = useAppContext();

  useLogger(defaultMessage, "Post");

  return (
    <div className="post-container">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{user?.name}</p>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul className="comments-container">
        {comments
          ?.filter((comment) => comment.postId === post.id)
          .map((comment) => <Comment key={comment.id} comment={comment} />)}
      </ul>
    </div>
  );
}
