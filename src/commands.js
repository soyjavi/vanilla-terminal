import PKG from '../package.json';

export default {
  clear: {
    run: terminal => terminal.clear(),
  },

  help: {
    run: (terminal) => {
      terminal.output(`Vanilla Terminal bash, version ${PKG.version}`);
      terminal.output('These shell commands are defined internally.  Type <i>help</i> to see this list.');
      terminal.output('<u>clear</u>, <u>help</u>, <u>version</u>');
      terminal.output();
    },
  },

  version: {
    run: terminal => terminal.output(`Vanilla Terminal v${PKG.version}`),
  },
};
