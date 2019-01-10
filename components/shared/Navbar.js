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
          <a style={{'fontSize': '20px'}}>Home</a>
        </Link>

        <Link href='/about'>
          <a>About</a>
        </Link>

        <Link href='/blog'>
          <a>Blog</a>
        </Link>

        <Link href='/portfolios'>
          <a>Portfolio</a>
        </Link>

        <Link href='/resume'>
          <a>Resume</a>
        </Link>
      </>
    );
  }
}

export default Navbar;
