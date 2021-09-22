import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const SelectMaruFilter: React.FC<{ column: any }> = ({
    column: { setFilter },
}) => {
    const [isClick, setIsClick] = useState(false);
    return (
        <Button
            size="xs"
            marginTop="0.5"
            paddingLeft="7"
            paddingRight="7"
            onClick={() => {
                isClick ? setFilter("") : setFilter("〇");
                setIsClick(!isClick);
            }}
        >
            {isClick ? "All" : "〇"}
        </Button>
    );
};

export default SelectMaruFilter;
