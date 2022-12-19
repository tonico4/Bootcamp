import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ContactComponent = ( {contact} ) => {
    return (
        <div className='d-grid gap-2 text-start' >
            <section className='d-flex justify-content-between align-items-center'> 
                <section className='d-flex'>
                    <h4> {contact.contactName} </h4>
                    <button className='btn btn--outline-dark'>
                        {
                            //show ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>
                            <i style={{color: 'white'}} class="bi bi-eye-slash"></i>
                        }
                    </button>
                </section>
                <h6 style={{fontSize: '12px'}} >Conected: { contact.conected ? (<i className='bi bi-record-fill' style={{color: 'green'}}></i>) : (<i className='bi bi-record-fill' style={{color: 'red'}}></i>) }</h6>
            </section>
            <section id='contact-details' className='d-none'>
                <h6>Name: {contact.name}</h6>
                <h6>Second name: {contact.secondName}</h6>
                <h6>Phone: {contact.phone}</h6>
                <h6>E-mail: {contact.mail}</h6>
            </section>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
