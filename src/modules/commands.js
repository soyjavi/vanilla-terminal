import PKG from '../../package.json';
import HELP from './help';

const { localStorage } = window;
const KEY = 'VanillaTerm';

export default {
  clear: terminal => terminal.clear(),

  help: (terminal, [command]) => {
    if (command) {
      terminal.output(`help: ${HELP[command] || `no help topics match <u>${command}</u>`}`);
    } else {
      terminal.output('These shell commands are defined internally. Type <u>help</u> for see the list.');
      terminal.output('Type <u>help name</u> to find out more about the function <u>name</u>.');
      terminal.output(Object.keys(terminal.commands).join(', '));
    }
  },

  version: terminal => terminal.output(`Vanilla Terminal v${PKG.version}`),

  wipe: (terminal) => {
    terminal.prompt('Are you sure remove all your commands history? Y/N', (value) => {
      if (value.trim().toUpperCase() === 'Y') {
        localStorage.removeItem(KEY);
        terminal.history = []; // eslint-disable-line
        terminal.historyCursor = 0; // eslint-disable-line
        terminal.output('History of commands wiped.');
      }
    });
  },
};
