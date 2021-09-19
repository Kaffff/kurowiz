import type { NextPage } from "next";
import data from "../public/json/kurowiz.json";
import jsonQuery from "json-query";
import React, { useState } from "react";

const Home: NextPage = () => {
    const [nameList, setNameList] = useState([]);

    const renderList = (type: string) => {
        const query = `[*属性=${type}].精霊名`;
        const result = jsonQuery(query, {
            data: data,
        });
        const list = result.value.map((res: string) => <li key={0}>{res}</li>);
        setNameList(list);
    };
    return (
        <div>
            <h3>属性</h3>
            <label>火</label>
            <input
                type="radio"
                name="属性"
                value="火"
                onChange={() => renderList("火")}
            />
            <label>水</label>
            <input
                type="radio"
                name="属性"
                value="水"
                onChange={() => renderList("水")}
            />
            <label>雷</label>
            <input
                type="radio"
                name="属性"
                value="雷"
                onChange={() => renderList("雷")}
            />
            <ul>{nameList}</ul>
        </div>
    );
};

export default Home;
