import React, { useState, useEffect } from 'react';

import './IconAndEditableField.scss';

const IconAndEditableField = (props) => {
  let [editing, setEditing] = useState(false);

  let ttId = 'tt-' + props.id;

  useEffect(() => {
    // If we're editable, then we want to select all characters
    if (editing) {
      var el = document.getElementById(ttId);
      window.getSelection().selectAllChildren(el);
    } else {
      window.getSelection().removeAllRanges();
    }
  });

  let containerClasses = ['editable-field-icon-container',
                          'editable-container'];
  return (
    <div
      id={props.id}
      style={props.style}
      className={containerClasses.join(' ')}>
      {props.icon}
      <div
        onKeyDown={(evt) => {
          if (editing && (evt.code === 'Enter' || evt.code === "Escape")) {
            evt.preventDefault();
            setEditing(false);
          }
        }}
        onClick={() => setEditing(true)}>
        <tt
          id={ttId}
          className="short left-spacing editable-field"
          contentEditable={`${editing}`}
          suppressContentEditableWarning={true}>
            {props.content}
        </tt>
      </div>
    </div>
  );
};

export { IconAndEditableField };
