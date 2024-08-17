import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const { posts } = useSelector((store) => store.post);
  return (
    <div>
      {posts.map((post, indx) => {
        return <Post key={indx} post={post} />;
      })}
    </div>
  );
}

export default Posts;
