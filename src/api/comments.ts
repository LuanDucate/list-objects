export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  export async function fetchComments(): Promise<Comment[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    if (!res.ok) {
      throw new Error("Error");
    }
    return res.json();
  }
  