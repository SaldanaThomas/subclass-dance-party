var RickRoss = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-ross.png">');
  this.size = 100;
  this.grow = true;
};

RickRoss.prototype = Object.create(ColorDancer.prototype);
RickRoss.prototype.constructor = RickRoss;

RickRoss.prototype.step = function() {
  ColorDancer.prototype.step.call(this);
  this.$node.css('height', this.size);
  this.$node.css('width', this.size);
  if (this.size === 130) {
    this.size -= 10;
    this.grow = false;
  } else if (this.size === 70) {
    this.size += 10;
    this.grow = true;
  } else if (this.grow === true) {
    this.size += 10;
  } else {
    this.size -= 10;
  }
};

var makeRickRoss = function(top, left, timeBetweenSteps) {
  var dancer = new RickRoss(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};