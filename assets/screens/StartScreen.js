class StartScreen {
  enter() {
    console.log('Entered start screen.');
  }
  exit() {
    console.log('Exited start screen.');
  }
  render(display) {
    // Render our prompt to the screen
    display.drawText(1, 1, '%c{yellow}Javascript Roguelike');
    display.drawText(1, 2, 'Press [Enter] to start!');
  }
  handleInput(inputType, inputData, screenController) {
    console.log('handlInput being called');
    console.log('screenController', screenController.switchScreen);
    console.log('keyCode', inputData.keyCode);
    // When [Enter] is pressed, go to the play screen
    if (inputType === 'keydown') {
      if (inputData.keyCode === 13 /* ROT.VK_RETURN */ ) {
        screenController.switchScreen(screenController.playScreen);
      }
    }
  }
}
