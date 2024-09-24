import React from 'react'

const Button = ({ color, text }: { color?: string; text: string}) => {
  return (
    <button
      className={`border py-2 px-4 rounded-lg text-white ${
        color ? color : "bg-blue-400 hover:bg-blue-500"
      } transition-colors`}
      type="submit"
    >
      {text}
    </button>
  );
}

export default Button
