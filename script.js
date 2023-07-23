//This code will make it so that it will load 5 customers in and when you click anywhere on the screen, a new random customer will pop up from one of the 5 loaded customers.
//I haven't made the customer images yet, so it's gonna look weird when you run it, but we're doing art tomorrow, so I'll add it then.

class Customer extends Phaser.Physics.Arcade.Sprite {
  order;
  constructor(scene, x, y) {
    let texture = "customer" + Phaser.Math.Between(1, 6);
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.order = getOrder(level, Math.round(Math.random()));
    console.log(this.order);
    let requestStyle = {
      fontFamily: "Arial",
      fontSize: 24,
      color: "#000000",
      wordWrap: { width: 450, useAdvancedWrap: true },
    };
    this.request = scene.add
      .text(x - 160, y - 295, this.order.request, requestStyle)
      .setOrigin(0, 1);
  }

  destroy() {
    super.destroy();
    this.request.destroy();
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game",

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },

  scene: [
    {
      preload: preload,
      create: create,
      update: update,
    },
    Front,
    Back,
  ],
};

const game = new Phaser.Game(config);

let level = 1;
let clickEnabled = true;
let customer;
let next;
let textBubble;
let onDown = false;

function preload() {
  this.load.image("background", "images/background.png");
  this.load.image("customer1", "images/customer1.png");
  this.load.image("customer2", "images/customer2.png");
  this.load.image("customer3", "images/customer3.png");
  this.load.image("customer4", "images/customer4.png");
  this.load.image("customer5", "images/customer5.png");
  this.load.image("customer6", "images/customer6.png");
  this.load.image("next", "images/next.png");
  this.load.image("bubble", "images/Textbubble.png");
}

function create(data) {
  const bg = this.add.image(0, 0, "background").setOrigin(0, 0);
  bg.setScale(game.config.width / bg.width, game.config.height / bg.height);

  textBubble = this.add.image(
    game.config.width / 1.8,
    game.config.height / 7.5,
    "bubble"
  );
  textBubble.setScale(game.config.width / 1200, game.config.height / 1500);

  next = this.add
    .sprite((game.config.width * 90) / 100, game.config.height / 15, "next")
    .setInteractive();
  next.setScale(game.config.width / 4000, game.config.height / 4000);

  customer = new Customer(this, 400, 400);
}

function update(time, delta) {
  next.on("pointerdown", function (pointer) {
    onDown = true;
  });

  if (onDown) {
    customer.destroy();
    customer = new Customer(this, 400, 400);
    onDown = false;
  }
}
