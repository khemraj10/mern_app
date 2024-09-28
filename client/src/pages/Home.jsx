import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonLogout = () => {
    localStorage.clear();
    navigate("/login")
  };
  return (
    <div>
      <h1>Welcome, {localStorage.getItem("user")}</h1>
      <button type="button" onClick={handleButtonLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
