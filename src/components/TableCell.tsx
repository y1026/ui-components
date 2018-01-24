import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderCellProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class HeaderCell extends React.Component<TableHeaderCellProps> {
  public render() {
    return (
      <th>
        {this.props.children}
      </th>
    );
  }
};

export default HeaderCell;