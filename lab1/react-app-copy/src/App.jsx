import { Post } from "./components/Post";
import { posts } from "./components/posts";

export const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      {posts.map((p) => (
        <Post todo={p.todo} description={p.description} />
      ))}
    </div>
  );
};
