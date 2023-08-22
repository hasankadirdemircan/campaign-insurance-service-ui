import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { CampaignCategory } from '../features/campaign/models/campaignCategory';
import './CreateCampaignForm.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { CreateCampaignRequest } from '../features/campaign/models/createCampaignRequest';
import { createCampaign } from '../api/campaignApi';
import { useNavigate } from 'react-router-dom'; //backende createcampaign isteği sonrasında CampaignList sayfasına dön. DOM


const CreateCampaignForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<CreateCampaignRequest>({
        id: 0,
        campaignTitle: '',
        campaignDetail: '',
        campaignCategory: CampaignCategory.HAYAT_INSURANCE,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value as any,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await dispatch(createCampaign(formData));
            console.log(formData);
            // İşlem tamamlandığında navigate işlemi gerçekleştir
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container >
            <h1 className='my-3'> Create Campaign</h1>
            <Row className="justify-content-center my-3">
                <Col xs={12} md={8} style={{ maxWidth: '500px' }} >
                    <Form onSubmit={handleSubmit} >
                        <Form.Group controlId="campaignTitle" className='my-3'>
                            <Form.Label className="custom-form-label">Campaign Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="campaignTitle"
                                value={formData.campaignTitle}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="campaignDetail" className='my-3'>
                            <Form.Label className="custom-form-label">Campaign Detail</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="campaignDetail"
                                value={formData.campaignDetail}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="campaignCategory" className='my-3'>
                            <Form.Label className="form-label">Campaign Category</Form.Label>
                            <Form.Select name="campaignCategory" value={formData.campaignCategory} onChange={handleSelectChange} required>
                                {Object.values(CampaignCategory).map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Campaign
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container >
    );
};

export default CreateCampaignForm;
