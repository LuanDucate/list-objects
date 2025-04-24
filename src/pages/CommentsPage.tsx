import { useEffect, useState } from "react";
import { fetchComments, Comment } from "../api/comments";
import { CommentCard } from "../components/CommentCard";

export function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments()
      .then(setComments)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
