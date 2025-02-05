
import './index.css'
import React from "react";
import 'flowbite';

const Button = () => { // Button component
  const [clicked, setClicked] = React.useState(false);  // Trạng thái của button

  const handleClick = () => { // Hàm xử lý sự kiện click
    setClicked(!clicked); // Khi click vào button, trạng thái của button sẽ thay đổi 
  };

  return (
    <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
      {clicked ? "Clicked " : "Click me"} 
    </button>
  );
};

export default Button;
