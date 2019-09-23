window.onload = () => {
  // create display with dimentions measured in characters
  const display = new ROT.Display({ width: 80, height: 20 });
  const container = display.getContainer();

  // add container to out HTML page
  document.body.appendChild(container);

  let foreground;
  let background;
  let colors;

  for (let i = 0; i < 15; i++) {
    // calculate fore/background colors, getting progressively darker/lighter respectively
    foreground = ROT.Color.toRGB([255 - i * 20, 255 - i * 20, 255 - i * 20]);
    background = ROT.Color.toRGB([i * 20, i * 20, i * 20]);
    // Create the color format specifier
    colors = `%c{${foreground}}%b{${background}}`;
    // draw text at column 2, row i
    display.drawText(2, i, colors + 'Hello, world!');
  }
};
