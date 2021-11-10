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

Admin.prototype.deleteUser = function(userToDelete) {
    users = users.filter(user => {
        return user.email !=userToDelete.email;
    })

}

//admin is inheriting the Users prototype
Admin.prototype = Object.create(User.prototype);


var firstUser = new User('testemail@gmail.com', 'Ryan', 'Gale');
var admin = new Admin('AdminUser@gmail.com', 'Hannah', 'Sherran');

firstUser.login();

console.log(firstUser);
console.log(admin)

const arrayOfNumbers = [1,4,7,7,6,4,5,12,88,67,67,5,5,90,101,122,222,565,55,66,23,23,24,25,22,3,4,1,90,88,12,12];

function removeDuplicates(arr) {

    let newArr =  arr.filter((item, index) => {
        return arr.indexOf(item) == index;
    });

    return newArr
}

console.log(removeDuplicates(arrayOfNumbers));

function findFactorial(number) {
    //Base case
    if (number == 1) {
      return 1;
    }
  
    //if Base case fails, recursive function call
    return number * findFactorial(number - 1);
  }
  
  console.log(findFactorial(5));

