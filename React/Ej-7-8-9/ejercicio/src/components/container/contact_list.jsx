import React, { useState } from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/contact_component';
import '../../styles/contact_list.css'
import ContactForm from '../pure/contact_form';

const ContactList = () => {

    /**
     * Estado inicial de la lista => hay dos contactos de ejemplo
     */
    const contact1 = new Contact("Josete", "Jose", "Martínez", 634567890, "josemar@mail.com", false);
    const contact2 = new Contact("Mari tía", "María", "González", 654321123, "marigon@mail.com", true);
    const contact3 = new Contact("Panadería", "Loli", "Luz", 965468422, "panaderia@mail.com", true);

    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    /**
     * Estado de la vista del formulario
     */
    const [btnActive, setBtnActive] = useState(false);
    const className = btnActive ? "" : "d-none";
    const listVisible = btnActive ? "d-none" : "";

    /**
     * Esta función añade un contacto en la última posición de la lista.
     * 
     * Para ello crea una lista temporal, clonando la actual, añadiendo el contacto nuevo y sustituyéndola con los nuevos contactos.
     * @param {*} contact 
     */
    function addContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    /**
     * Esta función elimina un contacto.
     * 
     * Para ello, se va a declarar el índice de la lista de contactos que servirá para saber internamente cuál se va a eliminar,
     * luego se crea una lista temporal que clona la actual, con el método splice() se elimina el contacto elegido y esta nueva lista sin el contacto sustituye
     * a la actual.
     * @param {*} contact 
     */
    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];

        // Splice empieza en el índice indicado y borra la cantidad de veces que se indique
        // desde el índice.
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    /**
     * Esta función actualiza el estado de la variable contac.conected
     * 
     * Se elige el índice del array del contacto que se quiere actualizar.
     * @param {*} contact 
     */
    function toggleConection(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    return (
        <div style={{width: 500}} className='border border-info rounded-4 px-5 py-5 d-grid gap-4'>
            <header className='d-flex justify-content-between align-items-center'>
                <h1 className='text-start fw-bold border-bottom border-primary fs-3'>Contacts</h1>
                <button onClick={() => setBtnActive(!btnActive)} className='btn btn-lg btn--outline-dark fs-5'>
                    <i class="bi bi-plus-circle-fill" style={{color: 'white'}}></i>
                </button>
            </header>
            <div className={className}>
                <ContactForm add={addContact}></ContactForm>
            </div>
            <div className={listVisible}>
                <h2 className='d-grid gap-4'>
                    { contacts.map( (contact, index) => {
                        return (
                            <ContactComponent key={index} contact={contact} remove={removeContact} toggle={toggleConection}></ContactComponent>
                        )
                    })}
                </h2>
            </div>
        </div>
    );
}

export default ContactList;
