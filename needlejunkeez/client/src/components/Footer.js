import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  {
    id: 1,
    page: 'Contact',
    path: '/contact',
  },
  {
    id: 2,
    page: 'Donations',
    path: '/donations',
  },
];

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      style={{
        backgroundColor: '#5D8AA8',
        color: 'white',
        padding: '8px 16px',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: isScrolled ? '-100%' : 0,
        transition: 'bottom 0.3s ease-in-out',
        zIndex: 999,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" style={{ fontSize: 12, lineHeight: '16px' }}>
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {pages.map((page) => (
            <Link
              key={page.id}
              to={page.path}
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '10px',
                fontSize: 15,
                lineHeight: '16px',
              }}
            >
              {page.page}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;