import { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Row, Col, Affix, Dropdown, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { profile } from "../../constants/icons";
import logo from "../../assets/images/price_logo.png";
import { DASHBOARD, LOGIN } from "../../constants/routes";

const Header = () => {
  useEffect(() => window.scrollTo(0, 0));
  const username = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate(`${LOGIN}`);
  };

  const items = [
    {
      key: "1",
      label: <Button onClick={logoutUser}>Logout</Button>,
    },
  ];

  return (
    <Affix style={{ zIndex: "10" }}>
      <Row className="my-header">
        <Col span={24} md={12} lg={12}>
          <div className="my-header-logo">
            <img src={logo} alt="" />
          </div>
        </Col>
        <Col span={24} md={12} lg={12} className="user-info">
          <div className="user-info">
            <Link to={DASHBOARD} className="btn-sign-in">
              {profile}
              <span className="user-email">
                {username}<br />
                {role}
              </span>
            </Link>
          </div>
          <Dropdown
            size="large"
            type="primary"
            menu={{
              items,
            }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              style={{ color: "#505050" }}
              href="/#"
            >
              <DownOutlined />
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Affix>
  );
};

export default Header;
