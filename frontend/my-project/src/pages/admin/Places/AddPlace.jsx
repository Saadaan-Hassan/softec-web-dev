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
			const listenerStatus = await addPlaces({ ...placeData });
			console.log(listenerStatus);
			if (listenerStatus.product) {
				notification.open({
					description: "Place added successfully!",
					className: "success-notification",
				});
				navigate(PLACES);
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
									name='locationName'
									rules={[
										{
											required: true,
											message: "Location name cannot be blank!",
										},
									]}>
									<Input
										className='email-holder'
										name='locationName'
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
										onChange={(e) =>
											setPlaceData({
												...placeData,
												picture: e.target.files[0],
											})
										}
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
								<Button type='default' className='mr-10'>
									Cancel
								</Button>
							</Link>
							<Button
								type='primary'
								htmlType='submit'
								loading={isLoading}
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
