import React from 'react';

const Dropzone = ({ onDrop }) => {
  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const processFiles = (files) => {
    for (let i = 0; i < files.length; i += 1) {
      const fileItem = (files[i].getAsFile && files[i].getAsFile()) || files[i];
      onDrop(fileItem.path);
      console.log('path', fileItem.path);
    }
  };

  const onFileDrop = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();

    const files = (ev.dataTransfer && ev.dataTransfer.items) || ev.target.files;

    processFiles(files);
  };

  return (
    <div className="dropzone-container">
      <div
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={onFileDrop}
        style={{
          width: '100%',
          height: 'auto',
          border: '5px dotted grey',
          boxSizing: 'border-box',
          padding: 15,
        }}
      >
        Drop a folder here to create a new server
      </div>
    </div>
  );
};

export default Dropzone;
