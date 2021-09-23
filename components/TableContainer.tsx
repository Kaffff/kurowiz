// @ts-nocheck
import React, { cloneElement, Fragment, useState } from "react";
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
    Select,
    Th,
    Tr,
    Td,
    Thead,
    Tbody,
    Flex,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, UpDownIcon } from "@chakra-ui/icons";
import DefaultColumnFilter from "./filters/DefaultColumnFilter";

const TableContainer = ({ columns, data }) => {
    const [isSmallerThan580] = useMediaQuery("(max-width: 580px)");
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
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
                pageSize: 20,
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
                <ChevronDownIcon boxSize="3" marginBottom="1px" />
            ) : (
                <ChevronUpIcon boxSize="3" marginBottom="1px" />
            )
        ) : (
            <UpDownIcon boxSize="2" marginLeft="2px" marginBottom="0.5" />
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
            <Container
                overflowY="hidden"
                overflowX="scroll"
                w="100vw"
                maxW="100vw"
                padding="0"
            >
                <Table variant="striped" {...getTableProps()}>
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
                                        <div>
                                            {column.canFilter
                                                ? column.render("Filter")
                                                : null}
                                        </div>
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
                                            <Td
                                                {...cell.getCellProps()}
                                                h={
                                                    isSmallerThan580
                                                        ? "70"
                                                        : "85"
                                                }
                                                fontSize={
                                                    isSmallerThan580
                                                        ? "xs"
                                                        : "md"
                                                }
                                            >
                                                {cell.render("Cell")}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Container>
            <Flex
                marginTop="2"
                marginBottom="30"
                w="100vw"
                minW="100vw"
                maxW="100vw"
                padding="0"
                justify="space-between"
                align="center"
            >
                <Text
                    fontSize={isSmallerThan580 ? "sm" : "md"}
                    marginRight="5"
                    w="1/3"
                >
                    {isSmallerThan580
                        ? `${pageIndex + 1}/${pageOptions.length}`
                        : `Page ${pageIndex + 1} of ${pageOptions.length}`}
                </Text>
                <Flex w="1/3">
                    <Button
                        color="primary"
                        size={isSmallerThan580 ? "md" : "lg"}
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        margin={isSmallerThan580 ? "1" : "2"}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="primary"
                        size={isSmallerThan580 ? "md" : "lg"}
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                        margin={isSmallerThan580 ? "1" : "2"}
                    >
                        {"<"}
                    </Button>
                    <Button
                        color="primary"
                        size={isSmallerThan580 ? "md" : "lg"}
                        onClick={nextPage}
                        disabled={!canNextPage}
                        margin={isSmallerThan580 ? "1" : "2"}
                    >
                        {">"}
                    </Button>
                    <Button
                        color="primary"
                        size={isSmallerThan580 ? "md" : "lg"}
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                        margin={isSmallerThan580 ? "1" : "2"}
                    >
                        {">>"}
                    </Button>
                </Flex>

                <Select
                    size={isSmallerThan580 ? "sm" : "md"}
                    value={pageSize}
                    onChange={onChangeInSelect}
                    w="1/3"
                >
                    {[10, 20, 30, 40, 50, 100, 200, 300].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {isSmallerThan580 ? pageSize : `Show ${pageSize}`}
                        </option>
                    ))}
                </Select>
            </Flex>
        </Fragment>
    );
};

export default TableContainer;
