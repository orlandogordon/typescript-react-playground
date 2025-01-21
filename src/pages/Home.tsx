import React from "react";
import { Link } from "react-router-dom";

// type Props = {}

// function Home({}: Props) {
function Home() {
  return (
    <div>
      <ul>
        <Link to={"./todo"}>
          <li>ToDo</li>
        </Link>
        <Link to={"./counter"}>
          <li>Counter</li>
        </Link>
        <Link to={"./profile"}>
          <li>Profile</li>
        </Link>
        <Link to={"./timer"}>
          <li>Timer</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
