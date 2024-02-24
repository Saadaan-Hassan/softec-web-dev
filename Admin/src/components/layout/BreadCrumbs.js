import { Breadcrumb } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>
        <NavLink to="/dashboard">Home</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="text-capitalize">
        {pathname.replace("/", "").replace("_", " ")}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
