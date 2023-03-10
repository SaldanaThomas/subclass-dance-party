// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// Dancer.prototype.step();

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: this.top + 'px',
    left: this.left + 'px'
  };
  this.$node.css(styleSettings);
};

//                          dancer
//                          /    \
//                color change    flippy
//                 /    \          /  \
//              ross  nixon     sanchez  astley
//     (grow/shrink)  (spin)   (moving)
//
//hover event                opposite      spin
//interaction                delete 1