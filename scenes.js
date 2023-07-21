class Front extends Phaser.Scene {
  level = 1;
  clickEnabled = true;
  customer;
  next;
  textBubble;
  onDown = false;

  constructor() {
    super("Front");
  }

  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('customer1', 'images/customer1.png');
    this.load.image('customer2', 'images/customer2.png');
    this.load.image('customer3', 'images/customer3.png');
    this.load.image('customer4', 'images/customer4.png');
    this.load.image('customer5', 'images/customer5.png');
    this.load.image('next', 'images/next.png');
    this.load.image('bubble', 'images/Textbubble.png');
  }

  create(data) {
    const bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
    bg.setScale(game.config.width / bg.width, game.config.height / bg.height);

    textBubble = this.add.image(game.config.width/1.8, game.config.height/7.5, "bubble");
    textBubble.setScale(game.config.width/1200, game.config.height/1500)

    next = this.add.sprite(game.config.width*90/100, game.config.height/15, 'next').setInteractive();
    next.setScale(game.config.width/4000, game.config.height/4000)

    customer = new Customer(this, 400, 400);
  }

  update(time, delta) {
    next.on("pointerdown", function (pointer) {
      onDown = true;
    });
    if (onDown) {
      customer.destroy();
      customer = new Customer(this, 400, 400);
      onDown = false;
    }
  }
}

class Back extends Phaser.Scene {
  constructor() {
    super("Back");
  }

  preload() {

  }

  create(data) {

  }

  update(time, delta) {
    
  }
}
