import React, { useMemo } from "react";
import { Select } from "@chakra-ui/react";

const SelectTypeFilter: React.FC<{ column: any }> = ({
    column: { setFilter },
}) => {
    return (
        <Select
            size="xs"
            marginTop="0.5"
            marginLeft="-1"
            placeholder="選択"
            onChange={(e: any) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            <option value="火">火</option>
            <option value="水">水</option>
            <option value="雷">雷</option>
            <option value="火/水">火/水</option>
            <option value="火/雷">火/雷</option>
            <option value="火/光">火/光</option>
            <option value="火/闇">火/闇</option>
            <option value="水/火">水/火</option>
            <option value="水/雷">水/雷</option>
            <option value="水/光">水/光</option>
            <option value="水/闇">水/闇</option>
            <option value="雷/火">雷/火</option>
            <option value="雷/水">雷/水</option>
            <option value="雷/光">雷/光</option>
            <option value="雷/闇">雷/闇</option>
        </Select>
    );
};

export default SelectTypeFilter;
