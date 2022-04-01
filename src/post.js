import { useState } from "react";

function Post(props) {
  console.log("props", props);
  const [title] = useState(props.post.title);
  const [content] = useState(props.post.content);
  const [likes, setLikes] = useState(props.post.likes);

  const renderLikes = () => {
    if (likes === 0) {
      return "Give us a like";
    } else {
      return likes + " likes";
    }
  };

  const handleLikes = () => {
    console.log("Clicked!");
    setLikes(likes + 1);
  };

  //En uno va sin paréntesis porque es una asignación, en el otro sí la estoy llamando
  return (
    <div>
      <h1> {title}</h1>
      <p>{content}</p>
      <p>{renderLikes()}</p>
      <button onClick={handleLikes}>Likes</button>
      <button onClick={() => props.onDelete(props.post.id)}>Delete</button>
    </div>
  );
}

export default Post;
