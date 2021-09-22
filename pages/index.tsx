import React, { useMemo } from "react";
import data from "../public/json/kurowiz.json";
import { Container } from "@chakra-ui/react";
import TableContainer from "../components/TableContainer";
import SelectTypeFilter from "../components/filters/SelectTypeFilter";
import SelectMaruFilter from "../components/filters/SelectMaruFilter";

const Home: React.FC = () => {
    const columns = useMemo(
        () => [
            {
                Header: "精霊名",
                accessor: "精霊名",
            },
            {
                Header: "属性",
                accessor: "属性",
                Filter: SelectTypeFilter,
            },
            {
                Header: "AS",
                accessor: "AS",
            },
            {
                Header: "SS1",
                accessor: "SS1",
            },
            {
                Header: "SS2",
                accessor: "SS2",
            },
            {
                Header: "EXAS(種類)",
                accessor: "EXAS(種類)",
            },
            {
                Header: "EXAS(条件)",
                accessor: "EXAS(条件)",
            },
            {
                Header: "所持",
                accessor: "所持",
            },
            {
                Header: "入手イベント",
                accessor: "入手イベント",
            },
            {
                Header: "状態特効(効果値)",
                accessor: "状態特効(効果値)",
            },
            {
                Header: "貫通(ガード)",
                accessor: "貫通(ガード)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "貫通(ダメブロ)",
                accessor: "貫通(ダメブロ)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "貫通(属性吸収)",
                accessor: "貫通(属性吸収)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "貫通(バリアウォール)",
                accessor: "貫通(バリアウォール)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "貫通(多層)",
                accessor: "貫通(多層)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "貫通(属性免疫)",
                accessor: "貫通(属性免疫)",
                Filter: SelectMaruFilter,
            },
            {
                Header: "精霊名2",
                accessor: "精霊名2",
            },
            {
                Header: "その他",
                accessor: "その他",
            },
            {
                Header: "id",
                accessor: "id",
            },
        ],
        []
    );

    return (
        <Container marginTop="5" maxW="max-content">
            <TableContainer columns={columns} data={data} />
        </Container>
    );
};

export default Home;
