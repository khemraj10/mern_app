import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        url: import.meta.env.VITE_API_URL + "auth/signup",
        data: {
          username: username,
          email: email,
          password: password,
        },
      };
      axios(configuration)
        .then((response) => {
          console.log(response);
          navigate("/")
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
    <div>
      <div>
        <h1>Sign Up</h1>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
      <form onSubmit={handleSignupSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Signup;
