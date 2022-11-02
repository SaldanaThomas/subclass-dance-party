$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');


    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = dancerMakerFunction(
      Math.min(Math.max($('body').height() * Math.random(), 150), $('body').height() - 100),
      Math.min(Math.max($('body').width() * Math.random(), 100), $('body').height() - 100),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    console.log('clicked this');
    var verticalPosition = 150;
    var horizontalPosition = 25;
    var dancersPerCol = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(verticalPosition, horizontalPosition);
      verticalPosition += 150;
      dancersPerCol++;
      if (dancersPerCol > 6) {
        dancersPerCol = 0;
        verticalPosition = 150;
        horizontalPosition += 150;
      }
    }
  });
});
