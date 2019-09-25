class LoseScreen {
  enter() {
    console.log('Entered lose screen.');
  }
  exit() {
    console.log('Exited lose screen.');
  }
  render(display) {
    // Render our prompt to the screen
    for (let i = 0; i < 22; i++) {
      display.drawText(2, i + 1, '%b{red}You lose! :(');
    }
  }
  handleInput(inputType, inputData) {
    // Nothing to do here
  }
}
