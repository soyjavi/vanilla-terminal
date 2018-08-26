# vanilla-terminal
🍦A simple and lightweight Javascript web browser terminal

Web apps are great. But sometimes instead of all the double-clicks, mouse pointers, taps and swipes across the screen - you just want good old keyboard input. This terminal runs in a browser, desktop or mobile. It provides a simple and easy way to extend the terminal with your own commands.


## How to use
Include `vanilla-terminal.js` in your HTML:

```html
<script src="vanilla-terminal.min.js"></script>
```

Define an HTML div tag where the terminal will be contained:

```html
<div id="vanilla-terminal"></div>
```

Create a new terminal instance and convert the DOM element into a live terminal.

```js
const terminal = new VanillaTerminal();
```

If you want use another DOM element just set the property `container`:

```js
const terminal = new VanillaTerminal({ container: 'my-vanilla-container' });
```
