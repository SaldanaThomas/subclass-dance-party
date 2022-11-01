var RickAstley = function (top, left, timeBetweenSteps) {
  FlippyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-astley.png">');
};

RickAstley.prototype = Object.create(FlippyDancer.prototype);
RickAstley.prototype.constructor = RickAstley;

var makeRickAstley = function(top, left, timeBetweenSteps) {
  var dancer = new RickAstley(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};
