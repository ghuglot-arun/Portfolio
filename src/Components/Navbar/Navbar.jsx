import { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>
        <AnchorLink className="anchor-link" offset={50} href="#home">
          AG
        </AnchorLink>
      </h1>

      {/* Desktop / Tablet Menu */}
      <ul className={`nav-menu ${open ? 'active' : ''}`}>
        <li onClick={() => setOpen(false)}>
          <AnchorLink className="anchor-link" offset={50} href="#home">Home</AnchorLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <AnchorLink className="anchor-link" offset={50} href="#project">Project</AnchorLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink>
        </li>
      </ul>

      <div className="nav-connect desktop-only">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
