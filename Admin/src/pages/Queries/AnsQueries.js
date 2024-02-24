import {
    Row,
    Table,
    Button,
    Tooltip,
    Popconfirm,
    notification,
    Typography,
    Col,
    Popover,
    Drawer,
} from "antd";

import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import { getAnswQueries } from "../../api/Query";

function Queries() {
    const [queryData, setqueryData] = useState([]);
    const [loading, setLoading] = useState(true);

    let { pathname } = useLocation();
    const subName = pathname.replace("/", "");

    useEffect(() => {
        getqueryData();
    }, []);


    const getqueryData = async (params) => {
        try {
            const listenerStatus = await getAnswQueries();
            console.log(listenerStatus)
            setqueryData(listenerStatus);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
            align: "center",
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
            align: "center",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Subject",
            dataIndex: "subject",
            key: "subject",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Answer",
            dataIndex: "answer",
            key: "answer",
        }
    ];
    return (
        <div>
            <Row className="breadcrumb-container">
                <BreadCrumbs />
            </Row>
            <Row justify={"space-between"}>
                <Col>
                    <Row className="ant-page-header-heading breadcrumb-heading page-title">
                        <Typography className="ant-page-header-heading-title text-capitalize">
                            {subName}
                        </Typography>
                        <Tooltip placement="top" title={<span>AnsweredQueries</span>}>
                        </Tooltip>
                    </Row>
                </Col>
            </Row>
            <Row className="table-responsive table-responsive-full">
                <Table
                    columns={columns}
                    dataSource={queryData}
                    pagination={false}
                    loading={loading}
                    className="ant-border-space"
                    style={{ width: "100%" }}
                />
            </Row>
        </div>
    );
}

export default Queries;
