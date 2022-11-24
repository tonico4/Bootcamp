import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Name: {contact.name}
            </h2>
            <h3>
                Second name: {contact.secondName}
            </h3>
            <h4>
                Email: {contact.mail}
            </h4>
            <h5>
                Conected: {contact.conected ? "En línea" : "No disponible"}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;

