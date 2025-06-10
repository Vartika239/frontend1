import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "john_doe",
      content: "Just had an awesome day at the beach! 🏖️",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "jane_smith",
      content: "Loving the vibes on VibeNet! ✨",
      timestamp: "1 hour ago",
    },
      {
      id: 3,
      username: "rea_smith",
      content: "Loving the vibes on Hurrehh! ✨",
      timestamp: "1 hour ago",
    },
  ]);
  
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      username: "current_user", // replace with actual logged in user
      content: newPost,
      timestamp: "Just now",
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="feed max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg shadow-lg text-white mt-20">
      {/* Post creation box */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 rounded-md resize-none bg-gray-800 text-white"
          rows={3}
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          onClick={handlePostSubmit}
          className="mt-2 bg-indigo-600 hover:bg-indigo-700 transition rounded px-4 py-2 font-semibold"
        >
          Post
        </button>
      </div>

      {/* Posts list */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-md p-4 shadow-sm border border-gray-700"
          >
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span className="font-semibold text-indigo-400">@{post.username}</span>
              <span>{post.timestamp}</span>
            </div>
            <p className="text-white whitespace-pre-wrap">{post.content}</p>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-center text-gray-400">No posts yet — be the first to post!</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
