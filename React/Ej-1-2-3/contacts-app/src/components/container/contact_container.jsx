import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact_component';

const contact1 = new Contact("Joe", "Doe", "jd@mail.com", false);

const ContactContainer = () => {
    return (
        <div>
            <ContactComponent contact={contact1}></ContactComponent>
        </div>
    );
};

export default ContactContainer;