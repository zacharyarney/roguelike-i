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
  handleInput(inputType, inputData, screenController) {
    if (inputType === 'keydown') {
      // If enter is pressed, go to the win screen
      // If escape is pressed, go to lose screen
      if (inputData.keyCode === 13 /* ROT.VK_RETURN */ ) {
        screenController.switchScreen(screenController.winScreen);
      } else if (inputData.keyCode === 27 /* ROT.VK_ESCAPE */ ) {
        screenController.switchScreen(screenController.loseScreen);
      }
    }
  };
}
