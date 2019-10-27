var demoobj = document.getElementById("demo");
var arr = ["rock", "paper", "scissors"];
var rand = Math.floor(Math.random() * 3);

var computerchoice = arr[rand];
var clientchoice = prompt("choose rock paper or scissors:")

if (computerchoice == 'rock') {
    if (clientchoice == 'rock') {
        demoobj.innerHTML = "its a tie try again...";
    }
}
if (computerchoice == 'rock') {
    if (clientchoice == 'paper') {
        demoobj.innerHTML = "bingo you win";
    }
}
if (computerchoice == 'rock') {
    if (clientchoice == 'scissors') {
        demoobj.innerHTML = "sorry you lose next time...";
    }
}
if (computerchoice == 'paper') {
    if (clientchoice == 'rock') {
        demoobj.innerHTML = "sorry you lose next time..."
    }
}
if (computerchoice == 'paper') {
    if (clientchoice == 'paper') {
        demoobj.innerHTML = "its a tie try again...";
    }
}
if (computerchoice == 'paper') {
    if (clientchoice == 'scissors') {
        demoobj.innerHTML = "bingo you win...";
    }
}
if (computerchoice == 'scissors') {
    if (clientchoice == 'rock') {
        demoobj.innerHTML = "bingo you win ...";
    }
}
if (computerchoice == 'scissors') {
    if (clientchoice == 'paper') {
        demoobj.innerHTML = "sorry you lose try again...";
    }
}
if (computerchoice == 'scissors') {
    if (clientchoice == 'scissors') {
        demoobj.innerHTML = "its a tie try again...";
    }
}

console.log(rand);
console.log(computerchoice);


// this is the second way to do this whit buttons
// this is the second way to do this whit buttons
// this is the second way to do this whit buttons

// var demoobj = document.getElementById("demo");
// var arr = ["rock", "paper", "scissors"];
// var rand = Math.floor(Math.random() * 3);

// var computerchoice = arr[rand];
// var clientchoice;
// function rock() {
//     clientchoice == 'rock';
// }

// function paper() {
//     clientchoice == 'paper';
// }

// function scissors() {
//     clientchoice == 'scissors';
// }






// if (computerchoice == 'rock') {
//     if (clientchoice == 'rock') {
//         demoobj.innerHTML = "its a tie try again...";
//     }
// }
// if (computerchoice == 'rock') {
//     if (clientchoice == 'paper') {
//         demoobj.innerHTML = "bingo you win";
//     }
// }
// if (computerchoice == 'rock') {
//     if (clientchoice == 'scissors') {
//         demoobj.innerHTML = "sorry you lose next time...";
//     }
// }
// if (computerchoice == 'paper') {
//     if (clientchoice == 'rock') {
//         demoobj.innerHTML = "sorry you lose next time..."
//     }
// }
// if (computerchoice == 'paper') {
//     if (clientchoice == 'paper') {
//         demoobj.innerHTML = "its a tie try again...";
//     }
// }
// if (computerchoice == 'paper') {
//     if (clientchoice == 'scissors') {
//         demoobj.innerHTML = "bingo you win...";
//     }
// }
// if (computerchoice == 'scissors') {
//     if (clientchoice == 'rock') {
//         demoobj.innerHTML = "bingo you win ...";
//     }
// }
// if (computerchoice == 'scissors') {
//     if (clientchoice == 'paper') {
//         demoobj.innerHTML = "sorry you lose try again...";
//     }
// }
// if (computerchoice == 'scissors') {
//     if (clientchoice == 'scissors') {
//         demoobj.innerHTML = "its a tie try again...";
//     }
// }

// console.log(rand);
// console.log(computerchoice);





