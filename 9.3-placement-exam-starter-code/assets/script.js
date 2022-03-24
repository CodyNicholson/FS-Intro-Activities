// First, tell us your name
let yourName = "Cody Nicholson"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Ginger bread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`;

gbTableCell = document.getElementById('qty-gb');
ccTableCell = document.getElementById('qty-cc');
sugarTableCell = document.getElementById('qty-sugar');
totalCell = document.getElementById('qty-total');

document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1;
    gbTableCell.textContent = gb;
    totalCell.textContent = gb + cc + sugar;
});

document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0) {
        gb = gb - 1;
        gbTableCell.textContent = gb;
        totalCell.textContent = gb + cc + sugar;
    }
});

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    ccTableCell.textContent = cc;
    totalCell.textContent = gb + cc + sugar;
});

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        cc = cc - 1;
        ccTableCell.textContent = cc;
        totalCell.textContent = gb + cc + sugar;
    }
});

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1;
    sugarTableCell.textContent = sugar;
    totalCell.textContent = gb + cc + sugar;
});

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar = sugar - 1;
        sugarTableCell.textContent = sugar;
        totalCell.textContent = gb + cc + sugar;
    }
});
