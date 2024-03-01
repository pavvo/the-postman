import { useSearchParams } from "react-router-dom";

import { Post } from "@/components/Post";
import { Search } from "@/components/Search";

import { usePosts } from "./hooks/usePosts";

import "./Posts.css";

export function Posts() {
  const [searchParams] = useSearchParams();

  const { posts, users, comments, isLoading } = usePosts();

  const filteredPosts = posts?.filter((post) => {
    if (!searchParams.get("q")) return true;

    const user = users?.find((user) => user.id === post.userId);

    if (user?.name.toLowerCase().includes(searchParams.get("q")?.toLowerCase() || "")) {
      return true;
    }
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Search />
      <div className="posts-container">
        {filteredPosts?.length ? (
          filteredPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
              user={users?.find((user) => user.id === post.userId)}
              comments={comments?.filter((comment) => comment.postId === post.id)}
            />
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
}
