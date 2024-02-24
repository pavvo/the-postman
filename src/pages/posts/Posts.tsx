import { useSearchParams } from "react-router-dom";

import { usePosts } from "./hooks/usePosts";

import { Post } from "./components/Post";
import { Search } from "./components/Search";

import "./Posts.css";

export function Posts() {
  const [searchParams] = useSearchParams();

  const { posts, users, comments, isLoading } = usePosts();

  // @TODO: Add a loading spinner
  if (isLoading) return <p>Loading...</p>;

  if (!posts) return <p>No posts found</p>;

  const filteredPosts = posts.filter((post) => {
    if (!searchParams.get("q")) return true;

    const user = users?.find((user) => user.id === post.userId);

    if (user?.name.toLowerCase().includes(searchParams.get("q")?.toLowerCase() || "")) {
      return true;
    }
  });

  return (
    <div className="posts-container">
      <Search />
      {filteredPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          user={users?.find((user) => user.id === post.userId)}
          comments={comments?.filter((comment) => comment.postId === post.id)}
        />
      ))}
    </div>
  );
}
