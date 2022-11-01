var RickAstley = function (top, left, timeBetweenSteps) {
  FlippyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="/img/rick-astley.png"><img>');
};

RickSanchez.prototype = Object.create(FlippyDancer.prototype);
RickSanchez.prototype.constructor = FlippyDancer;

var makeRickAstley = function(top, left, timeBetweenSteps) {
  var dancer = new RickAstley(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};
