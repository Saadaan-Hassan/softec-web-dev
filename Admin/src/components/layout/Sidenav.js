import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  PLACES,
} from "../../constants/routes";
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
    getItem(<Link to="/dashboard">Dashboard</Link>, "dashboard"),
    getItem(<Link to={PLACES}>Places</Link>, "places"),
  ];
  return (
    <div className="full-hieght">
      <Menu
        style={{ padding: 0 }}
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={["products"]}
        defaultOpenKeys={["manage-products"]}
        mode="inline"
        items={items} 
      />
    </div>
  );
};

export default SideNav;
