//This code will make it so that it will load 5 customers in and when you click anywhere on the screen, a new random customer will pop up from one of the 5 loaded customers.
//I haven't made the customer images yet, so it's gonna look weird when you run it, but we're doing art tomorrow, so I'll add it then.

let level = 4;

class Customer extends Phaser.Physics.Arcade.Sprite {
    order;
    constructor(scene, x, y) {
        let texture = 'customer' + Phaser.Math.Between(1, 5);
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.order = getOrder(level, Math.round(Math.random()));
        console.log(this.order);
        let requestStyle = { fontFamily: 'Arial', fontSize: 24, color: '#000000', wordWrap: { width:450, useAdvancedWrap: true} }
        this.request = scene.add.text(x-160, y-295, this.order.request, requestStyle).setOrigin(0, 1);
        
    }

    destroy() {
        super.destroy();
        this.request.destroy();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// const customer1_size = 50;
// const customer2_size = 75;
// const customer3_size = 100;
// const customer4_size = 100;
// const customer5_size = 100;

let clickEnabled = true;
let customer;
var next
var textBubble;
var onDown = false
function preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('customer1', 'images/customer1.png');
    this.load.image('customer2', 'images/customer2.png');
    this.load.image('customer3', 'images/customer3.png');
    this.load.image('customer4', 'images/customer4.png');
    this.load.image('customer5', 'images/customer5.png');
    this.load.image('next', 'images/next.png');
    this.load.image('bubble', 'images/Textbubble.png');
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

    // Implement your game's logic here
    next.on('pointerdown', function (pointer){
        onDown = true
    })
    if(onDown){
        customer.destroy();
        customer = new Customer(this, 400, 400)
        onDown = false
    }
}
