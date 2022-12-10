import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const navbar = [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#story",
      name: "Story",
    },
    {
      link: "#roadmap",
      name: "Roadmap",
    },
    {
      link: "#team",
      name: "Team",
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--header-height', document.getElementById('navbar').offsetHeight + 'px');
  },[])
  

  return (
    <nav id="navbar" className="navbar navbar-expand-lg position-sticky top-0 w-100">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/images/logo.webp"
            alt="Young Yetis"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
            {navbar.map(({ name, link }) => {
              return (
                <li className="nav-item" key={link}>
                  <a className="nav-link" href={link}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
