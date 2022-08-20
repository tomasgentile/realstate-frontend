import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Form = styled.form`
    width: 50%;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
    display: flex;
    border: 0.5px solid #e1e1e1;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFilter = () => {
    const [category, setCategory] = useState('');

    const data = useStaticQuery(graphql`
        query {
            allStrapiCategoria {
                nodes {
                    Nombre
                    id
                }
            }
        }
    `);
    
    const categories = data.allStrapiCategoria.nodes;

    const FilterUI = () => (
        <Form>
            <Select
                onChange={e => setCategory(e.target.value)}
                value={category}
            >
                <option value="">--Filtrar--</option>
                {categories.map(opt => (
                    <option
                        key={opt.id}
                        value={opt.Nombre}
                    >{opt.Nombre}</option>
                ))}
            </Select>
        </Form>
    )

    return { category, FilterUI }
}

export default useFilter;
