var Explosion = function (top, left) {
  Dancer.call(this, top, left, 500);
  this.$node = $('<img class="boom" src="img/explosion.png">');
  this.size = 100;
  this.lifecycle = 0;
};

Explosion.prototype = Object.create(Dancer.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.step = function () {
  Dancer.prototype.step.call(this);
  if (this.lifecycle < 10) {
    this.size += 10;
    this.lifecycle++;
    this.$node.css('width', this.size);
  } else {
    this.$node.css('visibility', 'hidden');
  }
};

var goBoom = function (top, left) {
  var boom = new Explosion(top, left);
  boom.step();
  boom.setPosition(top, left);
  return boom;
};
