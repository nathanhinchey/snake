(function () {
  if (typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }

  var View = SnakeGame.View = function($el){
    this.board = new SnakeGame.Board();
    this.$el = $el;
    setInterval(this.step.bind(this), 500);
    this.eventBinder();
  }

  View.prototype.eventBinder = function () {
    $(document).on('keydown', function (event) {
      var key = event.keyCode;
      console.log(key);
      this.handleKeyEvent(key);
    }.bind(this))
  }

  View.prototype.step = function () {
    this.board.snake.move();
    this.board.render();
    console.log(this.board.snake.pos);
  }

  View.prototype.handleKeyEvent = function (keyCode) {
    var up = 38;
    var down = 40;
    var left = 37;
    var right = 39;
    var dir;
    switch (keyCode) {
      case up:
        dir = "N";
        break;
      case down:
        dir = "S";
        break;
      case left:
        dir = "W";
        break;
      case right:
        dir = "E";
        break;
    }
    if (dir) {
      this.board.snake.dir = dir;
    }
  };


})();
