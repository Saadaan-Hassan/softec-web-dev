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
//   import { filter } from "../../constants/icons";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import addIcon from "../../../assets/images/plus.svg";
//   import {getFilterParams,convertToSimpleDateFormat} from "../Common"
import { getPlaces, deletePlaces } from "../../../api/Place";
//   import PlacesFilter from "../../components/layout/PlacesFilter";
import { ADDPLACE } from "../../../constants/routes.js";

function Places() {
	const showDrawer = () => setVisible(true);
	const hideDrawer = () => setVisible(false);
	const [visible, setVisible] = useState(false);
	const [placeData, setplaceData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isDelete, setIsDelete] = useState(false);
	// const [filters, setFilters] = useState();

	let { pathname } = useLocation();
	const subName = pathname.replace("/", "");

	useEffect(() => {
		getPlacesData();
	}, [isDelete]);

	// const handleSubmit = (formData) => {
	//   hideDrawer();
	//   updatePlaces(getFilterParams(formData));
	// }

	// const updatePlaces = (params) => {
	//   setFilters(params);
	//   getPlacesData(params);
	// };
	const getPlacesData = async (params) => {
		try {
			const listenerStatus = await getPlaces();
			//   params
			console.log(listenerStatus.place);
			setplaceData(listenerStatus.place);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	const confirmDelete = async (id) => {
		try {
			console.log(id);
			const res = await deletePlaces(id);
			const resData = res.message;

			if (resData.includes("Place deleted successfully")) {
				notification.open({
					description: "Place deleted successfully",
					className: "success-notification",
				});
				setplaceData([]);
				setIsDelete(!isDelete);
			} else {
				notification.open({
					description: "Item Cannot be Deleted!",
					className: "error-notification",
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		{
			title: "Location name",
			dataIndex: "location_name",
			key: "location_name",
			align: "center",
		},
		{
			title: "Latitude",
			dataIndex: "latitude",
			key: "latitude",
		},
		{
			title: "Longitude",
			dataIndex: "longitude",
			key: "longitude",
		},
		{
			title: "City",
			dataIndex: "city",
			key: "city",
		},
		{
			title: "Category",
			dataIndex: "category",
			key: "category",
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
									to={`/admin/dashboard/places/${place_item._id}/edit`}
									state={{
										location_name: place_item.location_name,
										latitude: place_item.latitude,
										longitude: place_item.longitude,
										picture: place_item.picture,
										video: place_item.video,
										description: place_item.description,
										city: place_item.city,
										category: place_item.category,
									}}>
									<Button className='btn-popover'>
										<Typography>Edit</Typography>
									</Button>
								</Link>
								<Popconfirm
									title='Confirm Delete'
									placement='left'
									onConfirm={() => confirmDelete(place_item._id)}
									okText='Yes'
									cancelText='No'>
									<Button className='action-btns'>
										<Typography>Delete</Typography>
									</Button>
								</Popconfirm>
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
						<Tooltip placement='top' title={<span>Add</span>}>
							<Link to={ADDPLACE}>
								<img src={addIcon} className='add-icon' alt='add-icon' />
							</Link>
						</Tooltip>
					</Row>
				</Col>
				<Col>
					<Row>
						{/* <Button
                longitude="link"
                onClick={showDrawer}
                className="header-control-settings-btn filter-btn"
              >
                {filter}
              </Button> */}
						{/* <Drawer
                className="settings-drawer"
                width={450}
                onClose={hideDrawer}
                visible={visible}
                closeIcon={false}
                title={<span className="p-24">Filters</span>}
              >
                <PlacesFilter onSubmit={handleSubmit} />
              </Drawer> */}
					</Row>
				</Col>
			</Row>
			<Row className='table-responsive table-responsive-full'>
				<Table
					columns={columns}
					dataSource={placeData}
					pagination={false}
					loading={loading}
					className='ant-border-space'
					style={{ width: "100%" }}
				/>
			</Row>
		</div>
	);
}

export default Places;
