import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const XTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      fontFamily: '"Fira Code", monospace',
      fontSize: 14,
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#e2e8f0',
        cursor: '#f8fafc',
        selection: 'rgba(74, 222, 128, 0.3)',
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    // Initial prompt
    term.write('\x1b[32m$\x1b[0m ');

    // Input handling
    term.onData((data) => {
      // Handle Enter key
      if (data === '\r') {
        term.write('\r\n\x1b[32m$\x1b[0m ');
      } 
      // Handle backspace
      else if (data === '\x7f') {
        term.write('\b \b');
      }
      // Normal input
      else {
        term.write(data);
      }
    });

    return () => term.dispose();
  }, []);

  return (
    <div className="bg-black text-gray-200 p-6 rounded-lg w-full max-w-2xl font-mono">
      {/* Window controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-sm text-gray-400">bash</p>
      </div>
      
      {/* Terminal container */}
      <div ref={terminalRef} className="h-64" />
    </div>
  );
};

export default XTerminal;