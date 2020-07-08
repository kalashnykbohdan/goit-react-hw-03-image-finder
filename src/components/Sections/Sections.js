import React from 'react';
import PropTypes from 'prop-types';

function Sections({title, children}){
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Sections.defaultProps = {
    title: '',
}

// Section.PropTypes = {
//     title:PropTypes.string,
//     children:PropTypes.node.isRequired,
// }

export default Sections;
