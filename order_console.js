function generateOrder() {
    let drinks = [
        { name: "Lemonade", percentage: 0 },
        { name: "Chocolate Milk", percentage: 0 },
        { name: "Tea", percentage: 0 },
        { name: "Coffee", percentage: 0 },
    ];

    let firstDrinkIndex = Math.floor(Math.random() * 4);
    let secondDrinkIndex = Math.floor(Math.random() * 4);

    while (secondDrinkIndex === firstDrinkIndex) {
        secondDrinkIndex = Math.floor(Math.random() * 4);
    }

    let firstDrinkPercentage = Math.floor(Math.random() * 2) * 50 + 50;

    if (firstDrinkPercentage === 100) {
        drinks[firstDrinkIndex].percentage = 100;
    } else {
        drinks[firstDrinkIndex].percentage = firstDrinkPercentage;
        drinks[secondDrinkIndex].percentage = 100 - firstDrinkPercentage;
    }

    for (let drink of drinks) {
        console.log(drink.percentage + "% " + drink.name);
    }

    if (drinks.some(drink => drink.percentage === 25)) {
        generateOrder();
    }
}
