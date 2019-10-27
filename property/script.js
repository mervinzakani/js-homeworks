// Take a property name form user.
// 2. Show value of this property.
// 3. Ask from user DO YOU WANT TO UPDATE THIS?
// 4. If user entered YES, Take new value, update object and then show object in console
// 5. If user entered NO, show object in console.


var property = prompt("enter any property you like :");

var confirm = prompt("your propert you use is " + property + " do you want to change it ??");

(confirm == 'yes') ? console.log(property = prompt('enter new value')) : console.log(property);


// whit if statement
// var property = prompt("enter any property you like :");

// var confirm = prompt("your propert you use is " + property + " do you want to change it ??");

// if (confirm == 'yes') {
//     property = prompt('enter new value');
//     console.log(property);
// }
// else if (confirm == 'no') {
//     console.log(property);
// }
// else {
//     console.log("you can use yes or no in condition part");
// }







