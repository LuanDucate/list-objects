import { Comment } from "../api/comments";

interface Props {
  comment: Comment;
}

export function CommentCard({ comment }: Props) {
  return (
    <div className="comment">
      <h2>{comment.name}</h2>
      <p className="email">{comment.email}</p>
      <p className="body">{comment.body}</p>
    </div>
  );
}
