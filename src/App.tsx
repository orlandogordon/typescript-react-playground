import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ToDo from "./pages/ToDo";
import Profile from "./pages/Profile";
import Timer from "./pages/Timer";
import "./App.css";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Button />
      <Routes>
        {/* <Route path="/" element={<div>Welcome to the Home page</div>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
