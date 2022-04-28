import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const BreadcrumbCustomer = () => {
    const location = useLocation();
    const path = location.pathname;
    const pathSplit = path.split("/");
    const breadcrumbText = []

    for (let i = 0; i < pathSplit.length; i++) {
        if (pathSplit[i] == '') continue;
        let convert = ''
        if (pathSplit[i].indexOf("-") == -1) {
            convert += pathSplit[i].charAt(0).toUpperCase() + pathSplit[i].slice(1);
        }
        else {
            let tmp = pathSplit[i].split("-");
            for (let j = 0; j < tmp.length; j++) {
                let str = tmp[j]
                convert += str.charAt(0).toUpperCase() + str.slice(1) + " ";
            }
        }
        breadcrumbText.push(convert);
    }

    return (
        <Breadcrumb style={{ margin: "16px 0" }}>
            {
                breadcrumbText.map((item) =>
                    item == '' || <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                )
            }
        </Breadcrumb>
    )
}

export default BreadcrumbCustomer;