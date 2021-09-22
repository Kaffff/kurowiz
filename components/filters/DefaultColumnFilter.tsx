import { Input } from "@chakra-ui/react";
import { Column } from "react-table";

const DefaultColumnFilter: React.FC<{ column: any }> = ({
    column: {
        filterValue,
        setFilter,
        preFilteredRows: { length },
    },
}) => {
    return (
        <Input
            size="xs"
            marginLeft="-3"
            value={filterValue || ""}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
            placeholder="検索"
        />
    );
};
export default DefaultColumnFilter;
