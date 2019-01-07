import React from "react";
import Link from "next/link";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/About">
          <a>About</a>
        </Link>

        <Link href="/Blog">
          <a>Blog</a>
        </Link>

        <Link href="/Portfolio">
          <a>Portfolio</a>
        </Link>

        <Link href="/Resume">
          <a>Resume</a>
        </Link>
      </>
    );
  }
}

export default Navbar;
