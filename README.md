# vanilla-terminal
🍦A simple and lightweight Javascript web browser terminal

<img src='https://i.imgur.com/0KwSRp6.gif' center width='600'>

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

If you want use another DOM element as container just set the property `container`:

```js
const terminal = new VanillaTerminal({ container: 'my-vanilla-container' });
```

### Add your own commands
If you want add your own commands to the terminal just pass a object using the *property* as your command and the *value* as the callback.

```js
const commands = {
  flavour: (instance) => {
    instance.output('There is only one flavour for your favorite🍦and it is <b>vanilla<b>.')
    instance.setPrompt('@soyjavi <small>❤️</small> <u>vanilla</u> ');
  },

  ping: (instance, arguments) => {
    instance.output('Ping to <u>${arguments[0]}</u>...');
  },
};

const terminal = new VanillaTerminal({ commands });
```

Now in your terminal could type your new commands:

```
**> help**
These shell commands are defined internally:
flavour, ping, clear, help, version, wipe

**> flavour**
There is only one flavour for your favorite🍦and it is **vanilla**.
**@soyjavi ❤️ vanilla >**
```
