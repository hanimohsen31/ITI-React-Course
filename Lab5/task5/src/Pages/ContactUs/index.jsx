import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../../components";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";


export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const submitMsg = () => {
    console.log(email);
    console.log(msg);
    history.push("/students");
  };
  
  const handleLogOut = () => {
    authCtx.logout();
    history.replace("/login");
  };

  return (
    <>
      <h1>Contact Us</h1>
      <div className="container d-flex justify-content-center col-10">
        <div className="card p-3 mt-4 col-8" style={{ height: "30vh" }}>
          <Input
            placeholder="Enter Your Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="Enter Your Message"
            value={msg}
            setValue={setMsg}
          />
          <button className="btn btn-primary m-2" onClick={submitMsg}>
            Submit
          </button>
          <button onClick={handleLogOut} className="btn btn-danger m-2 ">
        Log out
      </button>
        </div> 



      </div>
    </>
  );
};
