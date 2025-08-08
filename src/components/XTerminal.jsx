import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const XTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      fontFamily: '"Fira Code", monospace',
      fontSize: 16, // Increased font size
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

    // Auto-fit on window resize
    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    // Initial prompt
    term.write('\x1b[32m$\x1b[0m ');

    // Input handling
    term.onData((data) => {
      if (data === '\r') {
        term.write('\r\n\x1b[32m$\x1b[0m ');
      } else if (data === '\x7f') {
        term.write('\b \b');
      } else {
        term.write(data);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, []);

  return (
    <div className="bg-black text-gray-200 p-6 rounded-lg w-full max-w-8xl font-mono shadow-lg">
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
      <div ref={terminalRef} className="h-96" /> {/* Increased height */}
    </div>
  );
};

export default XTerminal;