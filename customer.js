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