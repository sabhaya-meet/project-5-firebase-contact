import React from "react";
import firebaseLogo from "../../public/logos_firebase.svg";

const Navbar = () => {
  return (
    <div className="my-4 h-[60px] rounded-lg gap-2 text-lg font-medium bg-white flex justify-center items-center">
      <img src={firebaseLogo} alt="" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
