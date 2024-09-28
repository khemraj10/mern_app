import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_API_URL);
    try {
      const configuration = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: import.meta.env.VITE_API_URL + "auth/login",
        data: {
          username: username,
          password: password,
        },
        withCredenials: true,
      };
      axios(configuration)
        //  .then((response) => {
        //   console.log(response);
        // })
        .then((response) => {
          localStorage.setItem("token", response.data.resp.token);
          localStorage.setItem('user', response.data.resp.username);
          if (response.data.resp.token) {
            navigate("/")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <button type="button" onClick={handleSignup}>
          SignUp
        </button>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
