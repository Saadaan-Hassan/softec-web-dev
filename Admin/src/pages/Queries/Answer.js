import React, { useState } from "react";
import { Form, Row, Col, Input, Typography, notification, Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { addAnswer } from "../../api/Query";
import { QUERIES } from "../../constants/routes";

const Answer = () => {
    const location = useLocation();
    const state = location.state || {};
    const navigate = useNavigate();

    const [ans, setans] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async () => {
        setIsLoading(true);
        await editPlace();
        setIsLoading(false);
    };

    const editPlace = async () => {
        try {
            const listenerStatus = await addAnswer(state.id, { answer: ans});
            console.log(listenerStatus);
            if (listenerStatus.message=="Answer added successfully") {
                notification.open({
                    description: "Answwer send successfully!",
                    className: "success-notification",
                });
                navigate(QUERIES);
            } else {
                notification.open({
                    description: `Error: ${listenerStatus.message}!`,
                    className: "error-notification",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Row className="ant-page-header-heading breadcrumb-heading box-shadow">
                <Typography className="ant-page-header-heading-title ant-page-header-text">
                    Answer the Query
                </Typography>
            </Row>
            <Row className="form-padding">
                <Form layout="vertical" onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Row className="w-700">
                                <Form.Item
                                    label="First Name"
                                    className="modal-form-item bold"
                                    name="firstName"
                                    initialValue={state.firstName}
                                >
                                    <Input
                                        className="email-holder"
                                        name="firstName"
                                        type="text"
                                       disabled
                                    />
                                </Form.Item>
                            </Row>
                            <Row className="w-700">
                                <Form.Item
                                    label="Last Name"
                                    className="modal-form-item bold"
                                    name="lastName"
                                    initialValue={state.lastName}
                                >
                                    <Input
                                        className="email-holder"
                                        name="lastName"
                                        type="text"
                                        disabled
                                    />
                                </Form.Item>
                            </Row>
                            <Row className="w-700">
                                <Form.Item
                                    label="Email"
                                    className="modal-form-item bold"
                                    name="email"
                                    initialValue={state.email}
                                >
                                    <Input
                                        className="email-holder"
                                        name="email"
                                        type="email"
                                        disabled
                                    />
                                </Form.Item>
                            </Row>
                            <Row className="w-700">
                                <Form.Item
                                    label="Subject"
                                    className="modal-form-item bold"
                                    name="subject"
                                    initialValue={state.subject}
                                >
                                    <Input
                                        className="email-holder"
                                        name="subject"
                                        type="text"
                                        disabled
                                    />
                                </Form.Item>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row className="w-700">
                                <Form.Item
                                    label="Description"
                                    className="modal-form-item bold"
                                    name="description"
                                    initialValue={state.description}
                                >
                                    <Input.TextArea
                                        className="email-holder"
                                        name="description"
                                        disabled
                                    />
                                </Form.Item>
                            </Row>
                            <Row className="w-700">
                                <Form.Item
                                    label="Answer"
                                    className="modal-form-item bold"
                                    name="answer"
                                >
                                    <Input.TextArea
                                        className="email-holder"
                                        name="answer"
                                        onChange={(e) =>
                                            setans(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-10">
                        <Form.Item gap={10}>
                            <Link to={QUERIES}>
                                <Button type="default" className="mr-10">
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isLoading}
                                icon={isLoading ? <LoadingOutlined /> : null}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Row >
        </div >
    );
};

export default Answer;
