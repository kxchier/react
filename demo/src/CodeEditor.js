import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="editor">
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
