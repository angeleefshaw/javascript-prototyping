function User(email, firstName, lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(`${this.firstName} ${this.lastName}  has logged in`);
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.firstName + '' + this.lastName, 'has logged out');
}

function Admin(...params) {
    User.apply(this, params)
    this.role = 'Super admin'
}

//admin is inheriting the Users prototype
Admin.prototype = Object.create(User.prototype);


var firstUser = new User('testemail@gmail.com', 'Ryan', 'Gale');
var admin = new Admin('AdminUser@gmail.com', 'Hannah', 'Sherran');

firstUser.login();

console.log(firstUser);
console.log(admin)