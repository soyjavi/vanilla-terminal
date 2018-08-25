import PKG from '../package.json';

const { localStorage } = window;
const KEY = 'VanillaTerm';

export default {
  clear: terminal => terminal.clear(),

  help: (terminal) => {
    terminal.output(`Vanilla Terminal bash, version ${PKG.version}`);
    terminal.output('These shell commands are defined internally.  Type <i>help</i> to see this list.');
    terminal.output(Object.keys(terminal.commands).join(', '));
  },

  version: terminal => terminal.output(`Vanilla Terminal v${PKG.version}`),

  wipe: (terminal) => {
    localStorage[KEY] = undefined;
    terminal.history = []; // eslint-disable-line
    terminal.historyCursor = 0; // eslint-disable-line
    terminal.output('History of commands wiped.');
  },
};
