var FlippyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-astley.png"><img>');
  this.flip = 1;
};

FlippyDancer.prototype = Object.create(Dancer.prototype);
FlippyDancer.prototype.constructor = FlippyDancer;

FlippyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.flip *= -1;
  this.$node.css('transform', 'scaleX(' + this.flip + ')');
  this.top = Math.min(Math.max(this.top + Math.floor(Math.random() * 100) - 50, 150), $('body').height() - 100);
  this.left = Math.min(Math.max(this.left + Math.floor(Math.random() * 100) - 50, 50), $('body').width() - 100);

  this.setPosition(this.top, this.left);
};

var makeFlippyDancer = function(top, left, timeBetweenSteps) {
  var flippyDancer = new FlippyDancer(top, left, timeBetweenSteps);
  flippyDancer.step();
  flippyDancer.setPosition(flippyDancer.top, flippyDancer.left);
  return flippyDancer;
};