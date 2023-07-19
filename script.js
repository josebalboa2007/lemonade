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

function preload() {
    this.load.image('background', 'images/background.png');
    // Load any other assets you might need (e.g., lemonade stand, customers, etc.)
}

function create() {
    const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    backgroundImage.displayWidth = game.config.width;
    backgroundImage.displayHeight = game.config.height;

    // Set up your game elements here, such as the lemonade stand, customers, etc.
}

function update() {
    // Implement your game's logic here
    // This function runs continuously in your game loop
}
