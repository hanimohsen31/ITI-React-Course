import { Input } from "../../components/Input/index";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);

  const history = useHistory();

  const handlelog = () => {
    if (localStorage.token === "12345") {
        history.replace("/users");
        }
    }
    handlelog();

  const handleSubmit = (event) => {
    event.preventDefault();

    //Dummy code
    if (email === "a@aaa" && password === "1") {
      localStorage.setItem("token", "12345");
      //   history.push("/main-page");
      history.replace("/users");
    } else setIsValidCred(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}

        <button className="btn btn-primary">Log-in</button>
      </form>
    </div>
  );
};
