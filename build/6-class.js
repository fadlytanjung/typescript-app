"use strict";
class Root {
}
class User extends Root {
    constructor(id, firstName, lastName) {
        super();
        this.retryLogin = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = '';
        this.done = false;
    }
    login(userName, password) {
        this.retryLogin += 1;
        if (userName === 'admin' && password === 'admin') {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attempted';
        }
        return false;
    }
    register() { }
}
User.MAX_FAILED_LOGIN = 2;
User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, 'john', 'dodo');
console.log(User.MAX_FAILED_LOGIN);
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
class EnhancementUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new EnhancementUser('medan', 2, 'ucok', 'cool');
