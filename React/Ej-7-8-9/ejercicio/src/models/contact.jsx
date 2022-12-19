export class Contact {
    contactName = "";
    name = "";
    secondName = "";
    phone;
    mail = "";
    conected = false;

    constructor(contactName, name, secondName, phone, mail, conected) {
        this.contactName = contactName;
        this.name = name;
        this.secondName = secondName;
        this.phone = phone;
        this.mail = mail;
        this.conected = conected;
    }
}