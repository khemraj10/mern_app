import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const vite_api_url =
    import.meta.env.VITE_API_URL || "http://localhost:3000/mern/api/";

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(username);

    try {
      const configuration = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: vite_api_url + "auth/signup",
        data: {
          username: username,
          email: email,
          password: password,
        },
      };
      axios(configuration)
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };
  return (
    <div className="x-flex-col all-container">
      <div className="x-flex-col form-container">
        <div className="x-flex-col form-inner-container">
          <h2>Sign up</h2>
          <form onSubmit={handleSignupSubmit} className="x-flex-col form">
            <div className="x-flex-col form-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="x-flex-col form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="x-flex-col form-input">
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
          <div className="x-flex-col login-header">
            <p>If you have already an account login</p>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
