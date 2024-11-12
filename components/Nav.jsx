'use client';
import { Link as ScrollLink } from 'react-scroll';

const links = [
    {
        name: 'ínicio',
    },
    {
        name: 'sobre',
    },
    {
        name: 'jornada',
    },
    {
        name: 'contato',
    },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
        <ul className={listStyles}>
            {links.map((link, index) => {
                return (
                    <ScrollLink
                        spy={spy}
                        key={index} 
                        activeClass='active' 
                        to={link.name} 
                        smooth
                        className={linkStyles}
                    >
                        {link.name}
                    </ScrollLink>
                );
            })}
        </ul>
    </nav>
  );
};

export default Nav;