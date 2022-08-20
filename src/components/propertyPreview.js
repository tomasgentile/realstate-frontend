import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Icons from './icons';
import urlSlug from 'url-slug';

const Card = styled.div`
    border: 1px solid #E1E1E1;   
    max-width: 600px;
    img {
        max-width: 100%;
        max-height: 400px;
    }
`;

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 1.4rem;
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const Button = styled(Link)`
    margin-top: 2rem;
    background-color: #75ab00;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const PropertyPreview = ({ property }) => {
    const { name, image, wc, parking, rooms, price } = property;
    const img = getImage(image);

    return (
        <Card>
            <GatsbyImage image={img} alt={'img property'} />
            <Content>
                <h3
                    css={css`
                        margin: 2rem auto 2rem;
                    `}
                >{name}</h3>
                <p className='price'>$ {price}</p>
                <Icons
                    wc={wc}
                    parking={parking}
                    rooms={rooms}
                />
                <Button to={`/${urlSlug(name)}`}>Visitar Propiedad</Button>
            </Content>
        </Card>
    )
}

export default PropertyPreview;
