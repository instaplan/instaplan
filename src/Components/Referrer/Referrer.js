import React from 'react';
import './Referrer.css';

const Referrer = () => {
    const targetProject = 'bartertag';

    return (
        <div id='referrer'>
            <p>
                ...<a href={`https://www.esellors.com/#${targetProject}`} target='_self'>back to esellors.com</a>
            </p>
        </div>
    );
};

export default Referrer;