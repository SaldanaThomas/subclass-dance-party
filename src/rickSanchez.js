var RickSanchez = function (top, left, timeBetweenSteps) {
  FlippyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/rick-sanchez.png">');
};

RickSanchez.prototype = Object.create(FlippyDancer.prototype);
RickSanchez.prototype.constructor = RickSanchez;

RickSanchez.prototype.step = function() {
  FlippyDancer.prototype.step.call(this);

  for (var i = 0; i < window.dancers.length; i++) {
    var otherDancer = window.dancers[i];
    var vertCloseness = Math.abs(otherDancer.top - this.top);
    var horCloseness = Math.abs(otherDancer.left - this.left);
    if (vertCloseness < 50 && horCloseness < 50 && otherDancer !== this && window.dancers.indexOf(this) !== -1) {
      var index = window.dancers.indexOf(otherDancer);
      window.dancers.splice(index, 1);
      otherDancer.$node.css('visibility', 'hidden');
      var boom = goBoom(otherDancer.top, otherDancer.bottom);
      $('body').append(dancer.$node);
    }
  }
};

var makeRickSanchez = function(top, left, timeBetweenSteps) {
  var dancer = new RickSanchez(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(dancer.top, dancer.left);
  return dancer;
};