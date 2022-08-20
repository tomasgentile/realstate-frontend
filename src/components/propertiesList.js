import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import useProperties from '../hooks/useProperties';
import PropertyPreview from './propertyPreview';
import * as styles from '../css/propertiesList.module.css';
import useFilter from '../hooks/useFilter';

const PropertiesList = () => {
    const dataProperties = useProperties();
    const [properties, setProperties] = useState(dataProperties);

    // Filter
    const { category, FilterUI } = useFilter();

    useEffect(() => {
        if(category) {
            const selectedProp = dataProperties.filter(property => property.categories === category);
            setProperties(selectedProp);
        } else {
            setProperties(dataProperties);
        }    
    }, [category]);

    return (
        <div>
            <h2
                css={css`
                margin-top: 5rem;
        `}
            >Nuestras Propiedades</h2>
            {FilterUI()}
            <ul className={styles.properties}>
                {properties.map(property => (
                    <PropertyPreview
                        key={property.id}
                        property={property}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PropertiesList;
