//This code will make it so that it will load 5 customers in and when you click anywhere on the screen, a new random customer will pop up from one of the 5 loaded customers.
//I haven't made the customer images yet, so it's gonna look weird when you run it, but we're doing art tomorrow, so I'll add it then.

const config = {
    type: Phaser.AUTO,
    width: '100%',
    height: '100%',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

const customer1_size = 50;
const customer2_size = 75;
const customer3_size = 100;
const customer4_size = 125;
const customer5_size = 150;

let clickEnabled = true;

function preload() {
    this.load.image('background', 'background.png');
    this.load.image('customer1', 'customer1.png');
    this.load.image('customer2', 'customer2.png');
    this.load.image('customer3', 'customer3.png');
    this.load.image('customer4', 'customer4.png');
    this.load.image('customer5', 'customer5.png');
}

function create() {
    const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    backgroundImage.displayWidth = game.config.width;
    backgroundImage.displayHeight = game.config.height;

    this.input.on('pointerdown', onPointerDown);
}

function onPointerDown(pointer) {
    if (clickEnabled) {
        const centerX = game.config.width / 2;
        const centerY = game.config.height / 2;
        const customerKey = 'customer' + Phaser.Math.Between(1, 5);
        const customerSize = Phaser.Math.Between(customer1_size, customer5_size);
        const customer = this.add.image(centerX, centerY, customerKey);
        const scalePercentage = customerSize / 100;
        customer.setScale(scalePercentage);
        clickEnabled = false;
    }
}

function update() {
    // Implement your game's logic here
}
