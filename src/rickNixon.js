var RickNixon = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-nixon.png">');
};

RickNixon.prototype = Object.create(ColorDancer.prototype);
RickNixon.prototype.constructor = RickNixon;

RickNixon.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('animation', 'rotate 2s infinite linear');
};

var makeRickNixon = function(top, left, timeBetweenSteps) {
  var dancer = new RickNixon(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};