var RickRoss = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-ross.png">');
};

RickRoss.prototype = Object.create(ColorDancer.prototype);
RickRoss.prototype.constructor = RickRoss;

RickRoss.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('background-color', this.randomColor());
};

var makeRickRoss = function(top, left, timeBetweenSteps) {
  var dancer = new RickRoss(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};