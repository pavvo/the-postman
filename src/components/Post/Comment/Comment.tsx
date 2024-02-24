import type { Comment } from "@/pages/posts/hooks/usePosts";

import "./Comment.css";

export interface CommentProps {
  comment: Comment;
}

export function Comment({ comment }: CommentProps) {
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
