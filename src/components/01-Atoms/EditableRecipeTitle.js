import React, { useState, useEffect } from 'react';

import "./EditableRecipeTitle.scss";

const EditableRecipeTitle = (props) => {
  let [editing, setEditing] = useState(false);

  useEffect(() => {
    // If we're editable, then we want to select all characters
    if (editing) {
      var el = document.getElementById(props.id);
      window.getSelection().selectAllChildren(el);
    } else {
      window.getSelection().removeAllRanges();
    }
  });

  let containerClasses = [
    'editable-container',
    'editable-heading'
  ];

  return (
    <div
      className={containerClasses.join(' ')}
      onKeyDown={(evt) => {
        if (editing && (evt.code === 'Enter' || evt.code === "Escape")) {
          evt.preventDefault();
          setEditing(false);
        }
      }}
      onClick={() => setEditing(true)}>
      <h1
        id={props.id}
        className="short editable-field"
        contentEditable={`${editing}`}
        suppressContentEditableWarning={true}>
          {props.content}
      </h1>
    </div>
  );
};

export { EditableRecipeTitle };
