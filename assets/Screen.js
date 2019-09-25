class Screen {
  constructor(enter, exit, render, handleInput = null) {
    this.enter = enter;
    this.exit = exit;
    this.render = render;
    this.handlInput = handleInput;
  }
}
