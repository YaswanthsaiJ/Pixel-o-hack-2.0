videojs.getPlayer('myPlayerID').ready(function() {
    // When the player is ready, get a reference to it
    var myPlayer = this;
    // Initialize the picture-in-picture plugin
    myPlayer.pip();
  });