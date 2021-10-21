import { useState } from "react";
import { Input } from "../Input";

export const AddPost = (props) => {
  const [title, setTitle] = useState("Enter something to do");
  const [body, setBody] = useState("Enter Description");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addPost({ title, body });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1 style={{textAlign:"center"}} >Task To Do</h1>

      <Input value={title} setValue={setTitle} label="To Do" />
      <Input value={body} setValue={setBody} label="Description" />

      <button onClick={handleSubmit} className="btn btn-primary">Add To the List</button>
    </div>
  );
};
