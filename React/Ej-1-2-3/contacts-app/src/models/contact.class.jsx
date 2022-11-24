export class Contact {
    name = "";
    secondName = "";
    mail = "";
    conected = false;

    constructor(name, secondName, mail, conected) {
        this.name = name
        this.secondName = secondName
        this.mail = mail
        this.conected = conected
    }
}