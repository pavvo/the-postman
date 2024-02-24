import type { Comment } from "@/pages/posts/hooks/usePosts";

import { useAppContext } from "@/hooks/useAppContext";
import { useLogger } from "@/hooks/useLogger";

import "./Comment.css";

export interface CommentProps {
  comment: Comment;
}

export function Comment({ comment }: CommentProps) {
  const { defaultMessage } = useAppContext();

  useLogger(defaultMessage, "Comment");

  return (
    <li className="comment-container">
      <h3>{comment.name}</h3>
      <a className="comment-mail" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
      <p className="comment-body">{comment.body}</p>
    </li>
  );
}
