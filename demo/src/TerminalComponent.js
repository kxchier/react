import React from 'react';
import ReactConsoleEmulator from 'react-console-emulator';

const TerminalComponent = () => {
  const commands = {
    help: {
      description: 'List all available commands',
      usage: 'help',
      fn: () => {
        return Object.keys(commands).map(cmd => `${cmd} - ${commands[cmd].description}`).join('\n');
      }
    },
    clear: {
      description: 'Clear the terminal',
      usage: 'clear',
      fn: () => {
        return ''; // Clearing will be handled by the emulator's built-in clear command
      }
    },
    echo: {
      description: 'Echo the input text',
      usage: 'echo <text>',
      fn: (...args) => {
        return args.join(' ');
      }
    },
    date: {
      description: 'Display the current date and time',
      usage: 'date',
      fn: () => {
        return new Date().toString();
      }
    },
    math: {
      description: 'Perform basic arithmetic operations',
      usage: 'math <operation> <num1> <num2>',
      fn: (operation, num1, num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        switch (operation) {
          case 'add':
            return (n1 + n2).toString();
          case 'subtract':
            return (n1 - n2).toString();
          case 'multiply':
            return (n1 * n2).toString();
          case 'divide':
            return n2 !== 0 ? (n1 / n2).toString() : 'Error: Division by zero';
          default:
            return 'Invalid operation. Use add, subtract, multiply, or divide.';
        }
      }
    }
  };

  return (
    <ReactConsoleEmulator
      commands={commands}
      noDefaults
      //welcomeMessage={'Welcome to the Terminal! Type "help" to see available commands.'}
      promptLabel={'$ '}
    />
  );
};

export default TerminalComponent;
