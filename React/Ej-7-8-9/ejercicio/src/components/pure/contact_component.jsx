import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ContactComponent = ( {contact} ) => {

    const details = document.getElementById('contactDetails');

    const eye = <i style={{color: 'white'}} class="bi bi-eye"></i>
    const eyeSlash = <i class="bi bi-eye-slash"></i>

    const initialActive = true;

    const [active, setActive] = useState(initialActive);

    function show() {
        details.classList.add('d-none');
        setActive(true)
    }

    function unShow() {
        details.classList.remove('d-none');
        setActive(false)
    }

    function changeShow() {

    }

    return (
        <div className='d-grid gap-2 text-start' >
            <div className='d-flex justify-content-between align-items-center'> 
                <div className='d-flex'>
                    <h4> {contact.contactName} </h4>
                    <button onClick={changeShow} className='btn btn--outline-dark'>
                        {
                            //show ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>
                            eye
                        }
                    </button>
                </div>
                <h6 style={{fontSize: '12px'}} >Conected: { contact.conected ? (<i className='bi bi-record-fill' style={{color: 'green'}}></i>) : (<i className='bi bi-record-fill' style={{color: 'red'}}></i>) }</h6>
            </div>
            <div id='contactDetails' className='d-none'>
                <h6>Name: {contact.name}</h6>
                <h6>Second name: {contact.secondName}</h6>
                <h6>Phone: {contact.phone}</h6>
                <h6>E-mail: {contact.mail}</h6>
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
