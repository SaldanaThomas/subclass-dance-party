var RickSanchez = function (top, left, timeBetweenSteps) {
  FlippyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-sanchez.png">');
};

RickSanchez.prototype = Object.create(FlippyDancer.prototype);
RickSanchez.prototype.constructor = RickSanchez;

var makeRickSanchez = function(top, left, timeBetweenSteps) {
  var dancer = new RickSanchez(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};