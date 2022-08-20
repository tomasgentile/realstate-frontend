import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    padding: 0.5rem;
    margin-right: 1rem;
    
    &:last-of-type {
        margin-right: 0;
    }
    &.actual-page {
        border-bottom: 2px solid #FFF;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLink to={'/'} activeClassName='actual-page'>Inicio</NavLink>
            <NavLink to={'/nosotros'} activeClassName='actual-page'>Nosotros</NavLink>
            <NavLink to={'/propiedades'} activeClassName='actual-page'>Propiedades</NavLink>
        </Nav>
    )
}

export default Navigation;
