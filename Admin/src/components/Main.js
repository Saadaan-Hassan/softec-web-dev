import { Layout, Row, Col } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidenav from "../components/layout/Sidenav";

const Main = () => {
  return (
    <div>
      <Row>
        <Layout className="my-header">
          <Header />
        </Layout>
      </Row>
      <Row>
        <Col xs={24} md={3} style={{ paddingTop: 50 }} className="shadow">
          <Sidenav style={{ paddingTop: 200 }} />
        </Col>
        <Col xs={24} md={21} className="shadow">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
