import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss'

class Navbar extends React.Component {
  render() {
    const title= this.props.title;

    return (
      <>
        <p>{title}</p>
        {this.props.children}
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/About'>
          <a>About</a>
        </Link>

        <Link href='/Blog'>
          <a>Blog</a>
        </Link>

        <Link href='/Portfolio'>
          <a>Portfolio</a>
        </Link>

        <Link href='/Resume'>
          <a>Resume</a>
        </Link>
      </>
    );
  }
}

export default Navbar;
