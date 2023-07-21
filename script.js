//This code will make it so that it will load 5 customers in and when you click anywhere on the screen, a new random customer will pop up from one of the 5 loaded customers.
//I haven't made the customer images yet, so it's gonna look weird when you run it, but we're doing art tomorrow, so I'll add it then.

const config = {
    type: Phaser.AUTO,
    parent: 'game',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },

    scene: [
        Front,
        Back,
    ]
};

const game = new Phaser.Game(config);

function preload() {

}

function create() {
    
}

// function onPointerDown(pointer) {
//     if (clickEnabled) {
//         const centerX = game.config.width / 2;
//         const centerY = game.config.height / 2;
//         const customerKey = 'customer' + Phaser.Math.Between(1, 5);
//         const customerSize = Phaser.Math.Between(customer1_size, customer5_size);
//         customer = new Customer(this, centerX, centerY);
//         const scalePercentage = customerSize / 100;
//         customer.setScale(scalePercentage);
//         clickEnabled = false;
//         const centerX = game.config.width / 2;
//         const centerY = game.config.height / 2;
//         const customerKey = 'customer' + Phaser.Math.Between(1, 5);
//         const customerSize = Phaser.Math.Between(customer1_size, customer5_size);
//         const customer = this.add.image(centerX, centerY, customerKey);
//         const scalePercentage = customerSize / 100;
//         customer.setScale(scalePercentage);
//         clickEnabled = false;
//     }
// }

function update() {

}
