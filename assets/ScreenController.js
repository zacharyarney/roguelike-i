// I'm aware this is a horrible and messy implementation.
// I will fix it later when I have a better idea what I'm doing thank you.
class ScreenController {
  constructor() {
    this._display = new ROT.Display({ width: 80, height: 24 });
    this.currentScreen = null;
    this.startScreen = new StartScreen();
    this.playScreen = new PlayScreen();
    this.winScreen = new WinScreen();
    this.loseScreen = new LoseScreen();
  }

  get display() {
    return this._display;
  }

  switchScreen(screen) {
    console.log('switchScreen being called')
    console.log('currentScreen before', this.currentScreen)
    // notify old screen, if exists, that we exited
    if (this.currentScreen !== null) {
      this.currentScreen.exit();
    }
    // clear display
    this.display.clear();
    // update current screen, notify it we entered and render it
    // this.currentScreen = this.currentScreen.handleInput(eventName, event, this);
    this.currentScreen = screen;
    console.log('currentScreen after', this.currentScreen)
    if (this.currentScreen) {
      this.currentScreen.enter();

      this.currentScreen.render(this.display);
    }
  }
}
