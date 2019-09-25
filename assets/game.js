class Game {
  constructor() {
    this.screen = new ScreenController();
    this.init();
  }

  init() {
    console.log('this.screen', this.screen);
    // helper function for binding to an event and sending it to the screen
    const game = this; // "so we don't lose 'this'" <= still not sure what this means...
    const bindEventToScreen = (event) => {
      window.addEventListener(event, (e) => {
        // When an event is recieved, send it to the screen if there is one
        if (game.screen.currentScreen !== null) {
          game.screen.currentScreen.handleInput(event, e, game.screen);
        }
      });
    };
    // bind keyboard input events
    bindEventToScreen('keydown');
    bindEventToScreen('keyup');
    bindEventToScreen('keypress');
  }
}

window.onload = () => {
  console.log('i am running i swear');
  console.log('VK_RETURN', ROT.VK_RETURN);
  const game = new Game();
  // add container to out HTML page
  document.body.appendChild(game.screen.display.getContainer());
  // load start screen
  game.screen.switchScreen(game.screen.startScreen);
};
