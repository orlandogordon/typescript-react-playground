import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  target: string;
  text: string;
};

function NavButton({ target, text }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(target);
  };
  return (
    <button
      onClick={handleClick}
      className="px-[20px] py-[10px] border-2 border-green-400 rounded-lg mb-4"
    >
      {text}
    </button>
  );
}

export default NavButton;
