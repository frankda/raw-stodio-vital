import React from 'react';
import './navigation.scss';

const Navigation = () => {
  const links = [
    {
      linkName: 'About',
      linkHref: '#'
    },
    {
      linkName: 'Practitioners',
      linkHref: '#'
    },
    {
      linkName: 'Our Products',
      linkHref: '#'
    },
  ]

  return (
    <header>
      <div className="brand-container">
        <div className="brand">
          <div className="brand-logo">
            <p>v.</p>
          </div>
          <div className="brand-name">
            <span>vital.ly</span>
          </div>
        </div>

        <div className="nav-links">
          <nav>
            {links.map((link, i) => {
              return (
                <a key={i} href={link.linkHref}>{link.linkName}</a>
              )
            })}
          </nav>
        </div>

        <div className="buttons">
            <button className="signin">Sign in</button>
            <button className="create-account">Create an account</button>
        </div>
      </div>
    </header>
  )
}

export default Navigation;