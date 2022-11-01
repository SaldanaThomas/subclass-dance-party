var RickRoss = function(top, left, timeBetweenSteps) {
  ColorDancer.call(this, top, left, timeBetweenSteps);
  var dancer = $('<img class="dancer" src="img/rick-ross.png">');
  this.$node = $('<span> ' + dancer + '</span>');
};

RickRoss.prototype = Object.create(ColorDancer.prototype);
RickRoss.prototype.constructor = RickRoss;

var makeRickRoss = function(top, left, timeBetweenSteps) {
  var dancer = new RickRoss(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};