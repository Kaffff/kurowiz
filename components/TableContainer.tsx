import React, { Fragment, useState } from "react";
import {
    useTable,
    useSortBy,
    useFilters,
    useExpanded,
    usePagination,
    useBlockLayout,
} from "react-table";
import {
    Table,
    Container,
    Button,
    NumberInput,
    Select,
    Th,
    Tr,
    Td,
    Thead,
    Tbody,
    Flex,
    Text,
    HStack,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import DefaultColumnFilter from "./filters/DefaultColumnFilter";

const TableContainer = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        visibleColumns,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn: { Filter: DefaultColumnFilter },
            initialState: {
                pageIndex: 0,
                pageSize: 10,
                hiddenColumns: ["所持", "精霊名2", "その他", "id"],
            },
        },
        useFilters,
        useSortBy,
        usePagination,
        useBlockLayout
    );

    const generateSortingIndicator = (column) => {
        return column.isSorted ? (
            column.isSortedDesc ? (
                <TriangleDownIcon />
            ) : (
                <TriangleUpIcon />
            )
        ) : (
            ""
        );
    };

    const onChangeInSelect = (event) => {
        setPageSize(Number(event.target.value));
    };

    const onChangeInInput = (event) => {
        const page = event.target.value ? Number(event.target.value) - 1 : 0;
        gotoPage(page);
    };

    return (
        <Fragment>
            <Table overflow="scroll" {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        // eslint-disable-next-line react/jsx-key
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                // eslint-disable-next-line react/jsx-key
                                <Th {...column.getHeaderProps()}>
                                    <div {...column.getSortByToggleProps()}>
                                        {column.render("Header")}
                                        {generateSortingIndicator(column)}
                                    </div>
                                    <DefaultColumnFilter column={column} />
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr key={row.getRowProps().key}>
                                {row.cells.map((cell) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>

            <Flex marginTop="2" marginBottom="30">
                <Flex>
                    <Button
                        color="primary"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        margin="1"
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                        margin="1"
                    >
                        {"<"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={nextPage}
                        disabled={!canNextPage}
                        margin="1"
                    >
                        {">"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        margin="1"
                    >
                        {">>"}
                    </Button>
                </Flex>
                <Container marginTop="2">
                    <Text fontSize="lg">
                        Page {pageIndex + 1} of {pageOptions.length}
                    </Text>
                </Container>

                <Container>
                    <Select value={pageSize} onChange={onChangeInSelect}>
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Select>
                </Container>
            </Flex>
        </Fragment>
    );
};

export default TableContainer;
