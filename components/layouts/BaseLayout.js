import React from "react";
import Navbar from "../shared/Navbar"

const BaseLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default BaseLayout;
