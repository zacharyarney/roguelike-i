class PlayScreen {
  enter() {
    console.log('Entered play screen.');
  };
  exit() {
    console.log('Exited play screen.');
  };
  render(display) {
    display.drawText(3, 5, '%c{red}%b{white}This game is so much fun!');
    display.drawText(4, 6, 'Press [Enter] to win, or [Esc] to lose!');
  };
  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      // If enter is pressed, go to the win screen
      // If escape is pressed, go to lose screen
      if (inputData.keyCode === ROT.VK_RETURN) {
        // this.switchScreen(this.winScreen);
        return this.winScreen;
      } else if (inputData.keyCode === ROT.VK_ESCAPE) {
        this.switchScreen(this.loseScreen);
      }
    }
  };
}
