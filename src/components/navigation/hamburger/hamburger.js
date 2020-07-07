import React, {useState} from 'react';
import './hamburger.scss';

const HamburgerIcon = (props) => {

  const hamburgerIconClass = (isSidebarActive) => {
    const baseCss = 'navigation-bar__hamburger-icon';
    return isSidebarActive ?
            `${baseCss} checked` : baseCss;
  };

  const handleClick = (e) => {
    props.setIsSidebarActiveState(!props.isSidebarActiveState);
  };

  return(
        <div id={'hamburger-icon'} onClick={handleClick} className={hamburgerIconClass(props.isSidebarActiveState)}>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  );
};

export default HamburgerIcon;
