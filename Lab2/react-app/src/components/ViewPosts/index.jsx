import { Post } from "../Post";

export const ViewPosts = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1 style={{textAlign:"center"}} >To Do List</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>Delete</button>
      {props.posts.map((p) => (<Post title={p.title} body={p.body} />))}
    </div>
  );
};
