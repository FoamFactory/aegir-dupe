import arrayMove from 'array-move';
import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { TiTimes } from 'react-icons/ti';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

import './ReorderableStepList.scss';

const DragHandle = sortableHandle(() => <GoThreeBars />);

class ReorderableStep extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      shouldShowDelete: false
    }
  }

  onMouseEnter() {
    this.setState({
      shouldShowDelete: true
    });
  }

  onMouseLeave() {
    this.setState({
      shouldShowDelete: false
    });
  }

  render() {
    let deleteButtonClasses = ['reorderable-step-list_delete-button'];

    if (this.state.shouldShowDelete) {
      deleteButtonClasses.push('displayed');
    }

    return (
      <li className='reorderable-step' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
      <DragHandle />
      <div className="reorderable-step_content">
        {this.props.value}
        <TiTimes className={deleteButtonClasses.join(' ')} onClick={this.props.onRemove} />
      </div>
      </li>
    );
  }
}

const SortableItem = sortableElement(ReorderableStep);

const SortableContainer = sortableContainer(({children}) => {
  return <ul className="reorderable-step-list">{children}</ul>;
});

export class ReorderableStepList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);

    this.state = {
      items: this.props.initialItems
    };
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  }

  remove(index) {
    this.setState((state) => {
      let items = [];
      for (let idx = 0; idx < state.items.length; idx++) {
        if (idx !== index) {
          items.push(state.items[idx]);
        }
      }

      return {
        items: items
      };
    });
  }

  render() {
    const {items} = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem
            key={`${this.props.listId}-entry${value}`}
            index={index}
            value={value}
            onRemove={() => {this.remove(index)}} />
        ))}
      </SortableContainer>
    );
  }
}
