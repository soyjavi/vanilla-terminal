import PKG from '../../package.json';

const { localStorage } = window;
const KEY = 'VanillaTerm';

export default {
  clear: terminal => terminal.clear(),

  help: (terminal) => {
    terminal.output('These shell commands are defined internally:');
    terminal.output(Object.keys(terminal.commands).join(', '));
  },

  version: terminal => terminal.output(`Vanilla Terminal v${PKG.version}`),

  wipe: (terminal) => {
    localStorage.removeItem(KEY);
    terminal.history = []; // eslint-disable-line
    terminal.historyCursor = 0; // eslint-disable-line
    terminal.output('History of commands wiped.');
  },
};
