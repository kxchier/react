import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';

const FileExplorer = ({ files, handleFileClick }) => {
  return (
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
  );
};

export default FileExplorer;
