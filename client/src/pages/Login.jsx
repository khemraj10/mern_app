import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const vite_api_url = import.meta.env.VITE_API_URL || 'http://localhost:3000/mern/api/'

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
        url: vite_api_url + "auth/login",
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
          localStorage.setItem("user", response.data.resp.username);
          if (response.data.resp.token) {
            localStorage.setItem("isLoggedIn", 'true')
            navigate("/");
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
    <div className="x-flex-col all-container">
      <div className="form-container x-flex-col">
        <div className="form-inner-container x-flex-col">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit} className="x-flex-col form">
            <div className="x-flex-col form-input">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="x-flex-col form-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Forgot password?</p>
            <button type="submit">
              Submit
            </button>
          </form>
          <div className="x-flex-col login-header">
            <p>If you have not account. Then Signup</p>
            <button type="button" onClick={handleSignup}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
