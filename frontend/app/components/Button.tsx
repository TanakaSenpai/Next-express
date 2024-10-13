import React from "react";

interface Props {
  color?: string;
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ color, text, type }: Props) => {
  return (
    <button
      className={`border py-2 px-4 rounded-lg text-white ${
        color ? color : "bg-blue-400 hover:bg-blue-500"
      } transition-colors`}
      type={type ? type : "submit"}
    >
      {text}
    </button>
  );
};

export default Button;
