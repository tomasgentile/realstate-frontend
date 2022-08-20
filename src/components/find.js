import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import * as styles from '../css/home.module.css';

const ImageBg = styled(BackgroundImage)`
    height: 300px;
`;

const Find = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file (relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImageBg
            tag='section'
            fluid={image.sharp.fluid}
            fadeIn='soft'
        >
            <div className={styles.imageBg}>
                <h3 className={styles.title}>Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImageBg>
    )
}

export default Find

