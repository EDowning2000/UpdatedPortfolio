import React, { useState } from "react";
import "./HamburgerBtn.css";

function HamburgerBtn() {
  const [openMenu, setOpenMenu] = useState("false");
  const [open, setOpen] = useState("menu-btn");

  const openSesame = () => {
    if (openMenu === "false") {
      setOpenMenu("true");
      setOpen("menu-btn open");
    } else {
      setOpenMenu("false");
      setOpen("menu-btn");
    }
  };

  return (
    <div className={open} onClick={openSesame}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}

export default HamburgerBtn;
