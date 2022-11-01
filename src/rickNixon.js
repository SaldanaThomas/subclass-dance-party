var RickNixon = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span <img class="dancer" src="img/rick-nixon.jpeg"></span>');
};

RickNixon.prototype = Object.create(ColorDancer.prototype);
RickNixon.prototype.constructor = RickNixon;

var makeRickNixon = function(top, left, timeBetweenSteps) {
  var dancer = new RickRoss(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};