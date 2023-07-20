//this is meant to be run in javascript console, so don't implement this into the index.html file
function generateOrder() {
    let w = Math.floor(Math.random() * 5) * 25;
    let x = Math.floor(Math.random() * (5 - (w / 25))) * 25;
    let y = Math.floor(Math.random() * (5 - (w / 25) - (x / 25))) * 25;
    let z = 100 - w - x - y;

    console.log(w + "% Lemonade");
    console.log(x + "% Chocolate Milk");
    console.log(y + "% Tea");
    console.log(z + "% Coffee");
}

generateOrder();
