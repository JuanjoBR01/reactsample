import Post from "./post";
const { useState } = require("react");

function Posts() {
  const [posts, setPosts] = useState([
    {
      title: "Post 1",
      content: "Content Post 1",
      likes: 5,
      id: 1,
    },
    {
      title: "Post 2",
      content: "Content Post 2",
      likes: 0,
      id: 2,
    },
    {
      title: "Post 3",
      content: "Content Post 3",
      likes: 5,
      id: 3,
    },
  ]);

  const deletePost = (id) => {
    console.log("Deleting Post!" + id);
    const filteredPosts = posts.filter((p) => p.id !== id);
    setPosts(filteredPosts);
  };

  return posts.map((p) => <Post key={p.id} post={p} onDelete={deletePost} />);
}

export default Posts;
