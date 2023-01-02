import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ContactComponent = ( {contact, remove, toggle} ) => {

    /**
     * Iconos
     */
    const eye = <i style={{color: 'white'}} class="bi bi-eye"></i>
    const eyeSlash = <i style={{color: 'white'}} class="bi bi-eye-slash"></i>
    const conectIcon = <i className='bi bi-record-fill' style={{color: 'green'}}></i>
    const disconectIcon = <i className='bi bi-record-fill' style={{color: 'red'}}></i>

    /**
     * Estado para visualizar los detalles de un contacto
     */
    const [hidden, setHidden] = useState(true);
    const className = hidden ? "d-none" : "";

    return (
        <div className='d-grid gap-2 text-start' >
            <div className='d-flex justify-content-between align-items-center'> 
                <div className='d-flex'>
                    <h4> {contact.nickName} </h4>
                    <button onClick={() => {setHidden(!hidden)}} className='btn btn--outline-dark'>
                        {
                            hidden ? eye : eyeSlash
                        }
                    </button>
                </div>
                <div className='d-flex justify-content-between align-items-center' style={{width: 100}}>
                    <h6 onClick={() => toggle(contact)} style={{fontSize: '12px'}}>
                        Conected: {contact.conected ? conectIcon : disconectIcon}
                    </h6>
                    <i onClick={() => {remove(contact)}} class="bi bi-trash fs-5 text-danger"></i>
                </div>
            </div>
            <div id='contactDetails' className={className}>
                <h6>Name: {contact.name}</h6>
                <h6>Second name: {contact.secondName}</h6>
                <h6>Phone: {contact.phone}</h6>
                <h6>E-mail: {contact.mail}</h6>
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
};


export default ContactComponent;
