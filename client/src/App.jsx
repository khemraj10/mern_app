import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './utils/ProtectedRoutes';
import { Layout } from './utils/Layout';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div id="App" className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />} >
x          <Route element={<Layout />}>
            <Route path='/' element={<Home />} exact />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
