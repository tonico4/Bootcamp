export class User {
    username = '';
    email = '';
    password = '';
    confirm = '';
    logged = false

    constructor(username, email, password, confirm, logged) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
        this.logged = logged;
    }
}