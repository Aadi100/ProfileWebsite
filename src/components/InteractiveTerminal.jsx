import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands, personalInfo } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: "🚀 Welcome to Engr. Abdul Hadi's interactive shell. Type 'help' or click the shortcuts below." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const screenRef = useRef(null);
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to input history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    if (trimmed in terminalCommands) {
      output = terminalCommands[trimmed];
    } else if (trimmed === 'date') {
      output = new Date().toUTCString();
    } else if (trimmed === 'sudo' || trimmed.startsWith('sudo ')) {
      output = "Permission denied: Root privileges belong to Engr. Abdul Hadi. Try 'help'.";
    } else if (trimmed === 'matrix') {
      output = "Wake up, Neo... Follow the white rabbit. Systems online and operational.";
    } else {
      output = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdStr },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPointer);
        setInputVal(cmdHistory[nextPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextPointer = historyPointer + 1;
        if (nextPointer < cmdHistory.length) {
          setHistoryPointer(nextPointer);
          setInputVal(cmdHistory[nextPointer]);
        } else {
          setHistoryPointer(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = ['help', 'whoami', 'education', 'experience', 'skills', 'projects', 'systems', 'contact', 'clear'];

  return (
    <section id="terminal" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive Terminal</span>
          </div>
          <h2 className="section-title">Developer Console</h2>
          <p className="section-subtitle">
            Query system specifications, inspect architecture designs, and explore repository architectures via CLI.
          </p>
        </div>

        {/* Quick Command Shortcuts */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="badge-tag"
              style={{
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(16, 185, 129, 0.08)',
                borderColor: 'rgba(16, 185, 129, 0.25)',
                color: '#34d399',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.08)')}
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '0.85rem',
            overflow: 'hidden',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Top Bar */}
          <div
            style={{
              padding: '0.75rem 1.25rem',
              background: 'rgba(15, 23, 42, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              zsh - abdulhadi@aadi-systems ~ (80x24)
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', padding: 0 }}
              title="Reset session"
            >
              <RefreshCw size={14} />
            </button>
          </div>

          {/* Terminal Screen Output */}
          <div
            ref={screenRef}
            style={{
              padding: '1.5rem',
              minHeight: '340px',
              maxHeight: '480px',
              overflowY: 'auto',
              background: '#070a10',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: '#cbd5e1',
              lineHeight: 1.6
            }}
          >
            {history.map((entry, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                {entry.type === 'system' && (
                  <div style={{ color: '#06b6d4' }}>{entry.text}</div>
                )}
                {entry.type === 'input' && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#10b981' }}>➜</span>
                    <span style={{ color: '#38bdf8' }}>~</span>
                    <span style={{ color: '#fff' }}>{entry.text}</span>
                  </div>
                )}
                {entry.type === 'output' && (
                  <pre
                    style={{
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginTop: '0.25rem',
                      paddingLeft: '1.25rem',
                      borderLeft: '2px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {entry.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Current Input Prompt */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#10b981' }}>➜</span>
              <span style={{ color: '#38bdf8' }}>~</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  flex: 1
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
