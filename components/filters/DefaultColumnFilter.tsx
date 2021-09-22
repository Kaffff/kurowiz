import { Input } from "@chakra-ui/react";

const DefaultColumnFilter: React.FC<{ column: any }> = ({
    column: { filterValue, setFilter },
}) => {
    return (
        <Input
            size="xs"
            marginTop="0.5"
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
