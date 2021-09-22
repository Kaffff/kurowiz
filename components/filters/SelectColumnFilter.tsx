import React, { useMemo } from "react";
import {
    Select,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SelectColumnFilter: React.FC<{ column: any }> = ({
    column: { filterValue, setFilter, preFilteredRows, id },
}) => {
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row: any) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    return (
        <Menu>
            <MenuButton as={IconButton} icon={<ChevronDownIcon />}></MenuButton>

            <MenuList>
                <MenuItem value="">All</MenuItem>
                {options.map((option: any) => (
                    <MenuItem
                        key={option}
                        value={option}
                        onClick={(e) => {
                            setFilter(e.target.value || undefined);
                        }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SelectColumnFilter;
