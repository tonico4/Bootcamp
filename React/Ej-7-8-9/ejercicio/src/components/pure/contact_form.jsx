import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ContactForm = ( {add} ) => {

    const nickNameRef = useRef('');
    const contactNameRef = useRef('');
    const secondNameRef = useRef('');
    const phoneRef = useRef('');
    const mailRef = useRef('');
    
    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nickNameRef.current.value,
            contactNameRef.current.value,
            secondNameRef.current.value,
            phoneRef.current.value,
            mailRef.current.value
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill p-5'>
                <input ref={nickNameRef} id='inputNickName' type='text' className='form-control form-control-lg mb-1' required autoFocus placeholder='Nick Name'/>
                <input ref={contactNameRef} id='inputName' type='text' className='form-control form-control-lg mb-1' required placeholder='Name' />
                <input ref={secondNameRef} id='inputSecondName' type='text' className='form-control form-control-lg mb-1' required placeholder='Second Name' />
                <input ref={phoneRef} id='inputPhone' type='number' className='form-control form-control-lg mb-1' required placeholder='Phone' />
                <input ref={mailRef} id='inputMail' type='email' className='form-control form-control-lg mb-4' required placeholder='E-mail' />
                <button type='submit' className='btn btn-success btn-lg ms-3'>Add Contact</button>
            </div>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default ContactForm;
