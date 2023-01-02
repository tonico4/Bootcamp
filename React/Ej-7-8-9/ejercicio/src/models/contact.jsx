export class Contact {
    nickName = "";
    name = "";
    secondName = "";
    phone;
    mail = "";
    conected = true;

    constructor(nickName, name, secondName, phone, mail, conected) {
        this.nickName = nickName;
        this.name = name;
        this.secondName = secondName;
        this.phone = phone;
        this.mail = mail;
        this.conected = conected;
    }
}