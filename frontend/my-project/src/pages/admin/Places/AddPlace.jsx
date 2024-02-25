import React, { useState } from "react";
import {
	Form,
	Row,
	Col,
	Input,
	Typography,
	notification,
	Button,
	Upload,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { addPlaces } from "../../../api/Place";
import { PLACES } from "../../../constants/routes.js";
import axios from "axios";

const AddPlace = () => {
	const navigate = useNavigate();

	const [placeData, setPlaceData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const onFinish = async () => {
		setIsLoading(true);
		console.log(placeData);
		await createPlace();
		setIsLoading(false);
	};

	const createPlace = async () => {
		try {
			// Create form data
			const formData = new FormData();
			formData.append("location_name", placeData.location_name);
			formData.append("description", placeData.description);
			formData.append("latitude", placeData.latitude);
			formData.append("longitude", placeData.longitude);
			formData.append("city", placeData.city);
			formData.append("category", placeData.category);
			formData.append("picture", placeData.picture);
			formData.append("video", placeData.video);

			const listenerStatus = await axios.post("/places", formData);
			console.log(listenerStatus);
			if (listenerStatus.data.product) {
				notification.open({
					description: "Place added successfully!",
					className: "success-notification",
				});
				navigate(PLACES);
			} else {
				notification.open({
					description: `Error: ${listenerStatus.data.message}!`,
					className: "error-notification",
				});
			}
		} catch (error) {
			notification.open({
				description: "Error: Something went wrong!",
				className: "error-notification",
			});
		}
	};

	return (
		<div>
			<Row className='ant-page-header-heading breadcrumb-heading box-shadow'>
				<Typography className='ant-page-header-heading-title ant-page-header-text'>
					Add Place
				</Typography>
			</Row>
			<Row className='form-padding'>
				<Form layout='vertical' onFinish={onFinish}>
					<Row gutter={16}>
						<Col span={12}>
							<Row className='w-700'>
								<Form.Item
									label='Location Name'
									className='modal-form-item bold'
									name='location_name'
									rules={[
										{
											required: true,
											message: "Location name cannot be blank!",
										},
									]}>
									<Input
										className='email-holder'
										name='location_name'
										type='text'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												location_name: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='Description'
									className='modal-form-item bold'
									name='description'>
									<Input.TextArea
										className='email-holder'
										name='description'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												description: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='City'
									className='modal-form-item bold'
									name='city'
									rules={[
										{
											required: true,
											message: "City cannot be blank!",
										},
									]}>
									<Input
										className='email-holder'
										name='city'
										type='text'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												city: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
						</Col>
						<Col span={12}>
							<Row className='w-700'>
								<Form.Item
									label='Latitude'
									className='modal-form-item bold'
									name='latitude'>
									<Input
										className='email-holder'
										name='latitude'
										type='number'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												latitude: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='Longitude'
									className='modal-form-item bold'
									name='longitude'>
									<Input
										className='email-holder'
										name='longitude'
										type='number'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												longitude: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='Category'
									className='modal-form-item bold'
									name='category'
									rules={[
										{
											required: true,
											message: "Category cannot be blank!",
										},
									]}>
									<Input
										className='email-holder'
										name='category'
										type='text'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												category: e.target.value,
											})
										}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='Picture'
									className='modal-form-item bold'
									name='picture'>
									<Input
										className='email-holder'
										name='picture'
										type='file'
										onChange={(e) => {
											console.log(e.target.files[0]);
											setPlaceData({
												...placeData,
												picture: e.target.files[0],
											});
										}}
									/>
								</Form.Item>
							</Row>
							<Row className='w-700'>
								<Form.Item
									label='Video'
									className='modal-form-item bold'
									name='video'>
									<Input
										className='email-holder'
										name='video'
										type='file'
										onChange={(e) =>
											setPlaceData({
												...placeData,
												video: e.target.files[0],
											})
										}
									/>
								</Form.Item>
							</Row>
						</Col>
					</Row>
					<Row className='mt-10'>
						<Form.Item gap={10}>
							<Link to={PLACES}>
								<Button className='mr-10 btn btn-danger w-100'>Cancel</Button>
							</Link>
							<Button
								htmlType='submit'
								loading={isLoading}
								className='btn btn-success w-100'
								icon={isLoading ? <LoadingOutlined /> : null}>
								Submit
							</Button>
						</Form.Item>
					</Row>
				</Form>
			</Row>
		</div>
	);
};

export default AddPlace;
