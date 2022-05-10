import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { RiGithubLine as Github, RiLinkedinBoxLine as Linkedin } from 'react-icons/ri'
import { useLanguage } from '../language/Language';
import '../styles/MobileMenu.scss';

const MobileMenu = ({ active }) => {

  const { changeLanguage, dictionary: { nav } } = useLanguage();

  const props = useSpring({
    right: active ? 0 : -window.innerWidth,
    opacity: active ? 1 : 0,
  })
  return (
    <animated.nav className='mobile-menu' style={props}>
      <div className="links">
        <Link to="/">{nav.work}</Link>
        <Link to="/resume">{nav.resume}</Link>
        <Link to="/contact">{nav.contact}</Link>
      </div>
      <div className="language">
        <button onClick={() => changeLanguage('en')}>EN</button>
        |
        <button onClick={() => changeLanguage('es')}>ES</button>
      </div>
      <div className="socials">
        <a href="https://github.com/amezal"><Github size={42} /></a>
        <a href=""><Linkedin size={42} /></a>
      </div>
    </animated.nav>
  )
}

export default MobileMenu