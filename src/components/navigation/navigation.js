import React, {useState, useEffect} from 'react';
import './navigation.scss';
import HamburgerIcon from './hamburger/hamburger';
import SlideDownBar from './slideDownBar/slideDownBar';

const Navigation = (props) => {
  const [isNavBarTriggeredState, setIsNavBarTriggeredState] = useState(false);
  const [isNavBarHiddenState, setIsNavBarHiddenState] = useState(false);
  const [currentScrollPosState, setCurrentScrollPosState] = useState(0);
  const [previousScrollPosState, setPreviousScrollPosState] = useState(0);

  useEffect(() => {
    setCurrentScrollPosState(props.currentScrollPos);
  }, [props.currentScrollPos]);

  useEffect(() => {
    if (props.currentScrollPos > 100 && !isNavBarTriggeredState) {
      setIsNavBarTriggeredState(true);
    }
    if (props.currentScrollPos === 0) {
      setIsNavBarTriggeredState(false);
    }
    (props.currentScrollPos > previousScrollPosState && props.currentScrollPos > 100) ?
            setIsNavBarHiddenState(true) : setIsNavBarHiddenState(false);
    setPreviousScrollPosState(currentScrollPosState);
  }, [currentScrollPosState]);

  const navBarClass = (isNavBarTriggered, isNavBarHidden) => {
    const baseCss = 'navigation-bar ';

    if (!isNavBarTriggered) {
      return baseCss;
    }

    return isNavBarHidden ?
            `${baseCss} navigation-bar--scroll-down` : `${baseCss} navigation-bar--scroll-up`;
  };

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
    <header className={navBarClass(isNavBarTriggeredState, isNavBarHiddenState)}>
      <div className="brand-container">
        <div className="brand">
          <div className="brand-logo">
            <p>v.</p>
          </div>
          <div className="brand-name">
            <span>vital.ly</span>
          </div>
        </div>

        {props.isMobile
        ?
        <React.Fragment>
          <HamburgerIcon
              setIsSidebarActiveState={props.setIsSidebarActiveState}
              isSidebarActiveState={props.isSidebarActiveState}
          />
          {props.isSidebarActiveState ? <SlideDownBar links={links} setIsSidebarActiveState={props.setIsSidebarActiveState}/> : undefined}
        </React.Fragment>
        :
        <React.Fragment>
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
        </React.Fragment>
        }
      </div>
    </header>
  )
}

export default Navigation;