import VanillaTerminal from './VanillaTerminal';

describe('VanillaTerminal', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="vanilla-terminal"></div>';
  });

  it('default', () => {
    expect(VanillaTerminal).toBeDefined();

    expect(typeof VanillaTerminal).toEqual('function');
  });

  it('when instance', () => {
    const term = new VanillaTerminal();

    expect(term).toBeDefined();
    expect(term.clear).toBeDefined();
    expect(term.onInput).toBeDefined();
    expect(term.output).toBeDefined();
    expect(term.setPrompt).toBeDefined();
  });

  it('when clear()', () => {
    const term = new VanillaTerminal();

    term.clear();
    expect(document.querySelector('output').innerHTML).toEqual('');
  });

  it('when onInput()', () => {
    const mockCallback = jest.fn();
    const term = new VanillaTerminal();

    term.onInput(mockCallback);
    mockCallback('hello');
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe('hello');
  });

  it('when output()', () => {
    const term = new VanillaTerminal();

    term.output('Hello World');
    expect(document.querySelector('output span:last-child').innerHTML).toEqual('Hello World');
  });

  it('when setPrompt()', () => {
    const term = new VanillaTerminal();

    term.setPrompt('Hello World ');
    expect(document.querySelector('.command .prompt').innerHTML).toEqual('Hello World &gt;');
  });

  it('when set another container to instance', () => {
    document.body.innerHTML = '<div id="vanilla-terminal-jest"></div>';
    const term = new VanillaTerminal({ container: 'vanilla-terminal-jest' });

    expect(term).toBeDefined();
  });

  it('when customized instance', () => {
    const term = new VanillaTerminal({
      welcome: 'Welcome JEST',
      prompt: 'Testing with JEST ',
      separator: '$',
    });

    expect(term).toBeDefined();
    expect(document.querySelector('output span').innerHTML).toEqual('Welcome JEST');
    expect(document.querySelector('.command .prompt').innerHTML).toEqual('Testing with JEST $');
  });

  it('when add new commands', () => {
    const term = new VanillaTerminal({
      commands: {
        flavour: (terminal) => {
          terminal.output('There is only one flavor and it is vanilla.')
          terminal.setPrompt('@soyjavi at <u>vanilla</u> ');
        }
      },
    })

    expect(term).toBeDefined();
    expect(term.flavour).not.toBeDefined();
  });
});
