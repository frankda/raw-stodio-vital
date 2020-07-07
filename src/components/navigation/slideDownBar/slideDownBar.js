import React from 'react';
import './slideDownBar.scss';

const SideNavbar = (props) => {
  return (
    <div className={'sidebar'}>
      {props.links.map((link, i) => {
        return (
          <a key={i} className="sidenavbar__nav__link" href={link.linkHref}>{link.linkName}</a>
        )
      })}
      <button className="signin">Sign in</button>
      <button className="create-account">Create an account</button>
    </div>
  );
};

export default SideNavbar;
