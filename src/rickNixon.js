var RickNixon = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-nixon.png">');
  this.rotation = 0;
};

RickNixon.prototype = Object.create(ColorDancer.prototype);
RickNixon.prototype.constructor = RickNixon;

RickNixon.prototype.step = function() {
  ColorDancer.prototype.step.call(this);
  this.$node.css('transform', 'rotate(' + this.rotation + 'deg)');
  if (this.rotation < 360) {
    this.rotation += 20;
  } else {
    this.rotation = 0;
  }
};

var makeRickNixon = function(top, left, timeBetweenSteps) {
  var dancer = new RickNixon(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};