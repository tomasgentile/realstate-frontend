import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Navigation from './navigation';

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;

  span{
    font-weight: 700;
  }
`;

const Header = () => {

  return (
    <>
      <header
        css={css`
          background-color: #0D283B;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 120rem;
            margin: 0 auto;
            text-align: center;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Logo to='/'>
            <h1>Bienes<span>Raices</span></h1>
          </Logo>
          <Navigation />
        </div>
      </header>
    </>
  )
}

export default Header;
