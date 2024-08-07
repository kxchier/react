import React, { useState } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import 'codemirror/lib/codemirror.css';

import './App.css';
import CodeEditor from './CodeEditor';
import ChatBoxComponent from './ChatBoxComponent';
import TerminalComponent from './TerminalComponent';

function App() {
  const [code, setCode] = useState('// Write code here');
  const [files, setFiles] = useState(['file1.js', 'file2.js']);
  const [currentFile, setCurrentFile] = useState(files[0]);

  const handleFileClick = (file) => {
    setCurrentFile(file);
    setCode(`// Content of ${file}`);
  };

  const handleMenuClick = (e, data) => {
    alert(`${data.action} clicked on ${currentFile}`);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h3>Files</h3>
        {files.map((file, index) => (
          <ContextMenuTrigger id="file_context_menu" key={index}>
            <div onClick={() => handleFileClick(file)} className="file">
              {file}
            </div>
          </ContextMenuTrigger>
        ))}
      </div>
      <div className="main">
        <CodeEditor code={code} setCode={setCode} />
        <TerminalComponent />
      </div>
      <div className="chatbox">
        <ChatBoxComponent />
      </div>
      <ContextMenu id="file_context_menu">
        <MenuItem data={{ action: 'Rename' }} onClick={handleMenuClick}>
          Rename
        </MenuItem>
        <MenuItem data={{ action: 'Delete' }} onClick={handleMenuClick}>
          Delete
        </MenuItem>
      </ContextMenu>
    </div>
  );
}

export default App;
