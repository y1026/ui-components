/// <reference types="react" />
import React from 'react';
export interface SortableTableProps {
    children?: React.ReactNode;
    className?: string;
    rowData?: object[];
    rowRenderer?: React.SFC<any>;
    headerData?: HeaderData[];
    headerRenderer?: React.SFC<any>;
}
export interface HeaderData {
    name: string;
    dataKey: string;
    sort?: (rowData: object[], dataKey: string) => object[];
}
export interface SortableTableState {
    data?: object[];
    sortBy?: string;
    ascending?: boolean;
}
export declare class SortableTable extends React.Component<SortableTableProps, SortableTableState> {
    constructor(props: SortableTableProps);
    componentDidMount(): void;
    handleHeaderClick(dataKey: string, descending: boolean): void;
    sortData(sortBy: string, descending: boolean): void;
    render(): JSX.Element;
    private performSort(rowData, headerData, sortBy);
    private defaultSort;
}
export default SortableTable;
