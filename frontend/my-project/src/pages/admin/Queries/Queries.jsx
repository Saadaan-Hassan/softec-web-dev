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
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import { getQueries } from "../../../api/Query";

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
			const listenerStatus = await getQueries();
			console.log(listenerStatus);
			setqueryData(listenerStatus);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Message",
			dataIndex: "message",
			key: "message",
		},
		{
			title: "Message Type",
			dataIndex: "messageType",
			key: "messageType",
		},
		{
			title: "Actions",
			key: "actions",
			fixed: "right",
			align: "center",
			render: (text, place_item) => (
				<div className='text-center'>
					<Popover
						trigger='click'
						placement='left'
						content={
							<div className='text-center'>
								<Link
									to={`/admin/dashboard/queries/${place_item._id}/answer`}
									state={{
										id: place_item._id,
										name: place_item.name,
										email: place_item.email,
										message: place_item.message,
										messageType: place_item.messageType,
									}}>
									<Button className='btn-popover'>
										<Typography>Answer</Typography>
									</Button>
								</Link>
							</div>
						}>
						<MenuOutlined />
					</Popover>
				</div>
			),
		},
	];
	return (
		<div>
			<Row className='breadcrumb-container'>
				<BreadCrumbs />
			</Row>
			<Row justify={"space-between"}>
				<Col>
					<Row className='ant-page-header-heading breadcrumb-heading page-title'>
						<Typography className='ant-page-header-heading-title text-capitalize'>
							{subName}
						</Typography>
						<Tooltip placement='top' title={<span>Add</span>}></Tooltip>
					</Row>
				</Col>
			</Row>
			<Row className='table-responsive table-responsive-full'>
				<Table
					columns={columns}
					dataSource={queryData}
					pagination={false}
					loading={loading}
					className='ant-border-space'
					style={{ width: "100%" }}
				/>
			</Row>
		</div>
	);
}

export default Queries;
