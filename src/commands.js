import PKG from '../package.json';

export default {
  clear: terminal => terminal.clear(),

  help: (terminal) => {
    terminal.output(`Vanilla Terminal bash, version ${PKG.version}`);
    terminal.output('These shell commands are defined internally.  Type <i>help</i> to see this list.');
    terminal.output(Object.keys(terminal.commands).join(', '));
  },

  version: terminal => terminal.output(`Vanilla Terminal v${PKG.version}`),
};
