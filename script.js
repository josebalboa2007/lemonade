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
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    textBubble = this.add.image(game.config.width/1.8, game.config.height/7.5, "bubble");
    textBubble.setScale(game.config.width/1200, game.config.height/1500)
    next = this.add.sprite(game.config.width*90/100, game.config.height/15, 'next').setInteractive();
    next.setScale(game.config.width/4000, game.config.height/4000)
    bg.setScale(game.config.width / bg.width, game.config.height / bg.height);

    customer = new Customer(this, 400, 400);

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
