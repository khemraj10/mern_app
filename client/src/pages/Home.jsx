import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="x-flex-col all-container home-container">
      <div className="x-flex-row logout-button">
        <Button variant="contained" type="button" onClick={handleButtonLogout}>
          Logout
        </Button>
      </div>
      <div className="heading">
        <h1>Welcome, {localStorage.getItem("user")}</h1>
      </div>
    </div>
  );
};

export default Home;
