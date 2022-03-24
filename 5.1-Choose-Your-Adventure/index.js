let userName = window.prompt('Please enter your name:');

let user = {
    user: userName,
    magic: 0,
    strength: 0,
    speed: 0
}

let q1 = window.prompt("You are suddenly locked inside a pitch black room! What do you do?\n1 - Kick the door\n2 - Cry\n3 - Think out loud");

if (q1 == 1) {
    user.strength++;
} else if (q1 == 2) {
    user.speed++;
} else if (q1 == 3) {
    user.magic++;
}

let q2 = window.prompt("You win a lottery! What do you do with the money?\n1 - Spend it now\n2 - Save it\n3 - Give it away");

if (q2 == 1) {
    user.speed++;
} else if (q2 == 2) {
    user.strength++;
} else if (q2 == 3) {
    user.magic++;
}

let q3 = window.prompt("Your friend fails to show up for a meeting at the promised time. What do you do?\n1 - Become irritated\n2 - Wait patiently\n3 - Get angry and leave");

if (q3 == 1) {
    user.strength++;
} else if (q3 == 2) {
    user.magic++;
} else if (q3 == 3) {
    user.speed++;
}

let role = null;

if (user.strength > user.speed && user.strength > user.magic) {
    role = "Warrior";
} else if (user.speed > user.strength && user.speed > user.magic) {
    role = "Rogue";
} else if (user.magic > user.speed && user.magic > user.strength) {
    role = "Sorcerer";
} else {
    role = "Hero";
}

window.alert(user.name + ', you are a: ' + role);
