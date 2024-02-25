import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
	PLACES,
	QUERIES,
	ANSQUERIES,
	DASHBOARD,
} from "../../../constants/routes.js";
const getItem = (label, key, children) => {
	return {
		key,
		children,
		label,
	};
};
const SideNav = () => {
	const location = useLocation();
	const selectedKey = location.pathname.split("/")[1];
	const items = [
		getItem(<Link to={DASHBOARD}>Dashboard</Link>, "dashboard"),
		getItem(<Link to={PLACES}>Places</Link>, "places"),
		getItem(<Link to={QUERIES}>Queries</Link>, "queries"),
		getItem(<Link to={ANSQUERIES}>AnsQueries</Link>, "answeredqueries"),
	];
	return (
		<div className='full-hieght'>
			<Menu
				style={{ padding: 0 }}
				selectedKeys={[selectedKey]}
				defaultSelectedKeys={["products"]}
				defaultOpenKeys={["manage-products"]}
				mode='inline'
				items={items}
			/>
		</div>
	);
};

export default SideNav;
