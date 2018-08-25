import INTERNAL_COMMANDS from './commands';
import template from './template';
import style from './VanillaTerminal.css'; // eslint-disable-line

const KEY = 'VanillaTerm';

const { addEventListener, localStorage } = window;

class Terminal {
  constructor(props = {}) {
    const {
      container = 'vanilla-terminal',
      commands = {},
      welcome = '',
      prompt = '',
      separator = '&gt;',
    } = props;
    this.commands = Object.assign({}, commands, INTERNAL_COMMANDS);
    this.history = localStorage[KEY] ? JSON.parse(localStorage[KEY]) : [];
    this.historyCursor = this.history.length;
    this.welcome = welcome;
    this.prompt = prompt;
    this.separator = separator;

    const el = document.getElementById(container);
    if (el) {
      this.cacheDOM(el);
      if (welcome) this.output(welcome);
      this.addListeners();
    } else throw Error(`Container #${container} doesn't exists.`);
  }

  cacheDOM = (el) => {
    el.classList.add(KEY);
    el.insertAdjacentHTML('beforeEnd', template(this));

    // Cache DOM nodes
    const container = el.querySelector('.container');
    this.DOM = {
      container,
      output: container.querySelector('output'),
      command: container.querySelector('.command'),
      input: container.querySelector('.command .input'),
      prompt: container.querySelector('.command .prompt'),
    };
  }

  addListeners = () => {
    const { DOM } = this;
    DOM.output.addEventListener('DOMSubtreeModified', () => {
      setTimeout(() => DOM.command.scrollIntoView(), 10);
    }, false);


    addEventListener('click', () => DOM.input.focus(), false);
    DOM.output.addEventListener('click', event => event.stopPropagation(), false);
    DOM.input.addEventListener('keyup', this.onKeyUp, false);
    DOM.input.addEventListener('keydown', this.onKeyDown, false);
    DOM.command.addEventListener('click', () => DOM.input.focus(), false);

    addEventListener('keyup', (event) => {
      DOM.input.focus();
      event.stopPropagation();
      event.preventDefault();
    }, false);
  }

  onKeyUp = (event) => {
    const { keyCode } = event;
    const { DOM, history = [], historyCursor } = this;

    if (keyCode === 27) { // ESC key
      DOM.input.value = '';
      event.stopPropagation();
      event.preventDefault();
    } else if ([38, 40].includes(keyCode)) {
      if (keyCode === 38 && historyCursor > 0) this.historyCursor -= 1; // {38} UP key
      if (keyCode === 40 && historyCursor < history.length - 1) this.historyCursor += 1; // {40} DOWN key

      if (history[this.historyCursor]) DOM.input.value = history[this.historyCursor];
    }
  }

  onKeyDown = ({ keyCode }) => {
    const { DOM, history, onInputCallback } = this;
    const value = DOM.input.value.trim();

    if (keyCode !== 13 || !value) return;

    const [command, ...parameters] = value.split(' ');

    // Save query in history
    history.push(value);
    localStorage[KEY] = JSON.stringify(history);
    this.historyCursor = history.length;

    // Duplicate current input and append to output section.
    const line = DOM.command.cloneNode(true);
    line.classList.add('line');
    const input = line.querySelector('.input');
    input.autofocus = false;
    input.readOnly = true;
    input.insertAdjacentHTML('beforebegin', input.value);
    input.parentNode.removeChild(input);
    DOM.output.appendChild(line);

    if (command) {
      const { commands = {} } = this;
      const program = commands[command];
      if (!program) this.output(`${command}: command not found.`);
      else {
        if (program.run) program.run(this);
        onInputCallback(command, parameters);
      }
    }
    DOM.input.value = '';
  }

  clear() {
    this.DOM.output.innerHTML = '';
    this.DOM.input.value = '';
  }

  onInput(callback) {
    if (callback) this.onInputCallback = callback;
  }

  output(html = '&nbsp;') {
    this.DOM.output.insertAdjacentHTML('beforeEnd', `<span>${html}</span>`);
    this.DOM.input.scrollIntoView();
  }

  setPrompt(prompt) {
    const { DOM, separator } = this;

    this.prompt = prompt;
    DOM.prompt.innerHTML = `${prompt}${separator}`;
  }
}

if (window) window.VanillaTerminal = Terminal;

export default Terminal;
