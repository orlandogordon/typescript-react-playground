import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ToDo from "./pages/ToDo";
import Profile from "./pages/Profile";
import Timer from "./pages/Timer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
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
