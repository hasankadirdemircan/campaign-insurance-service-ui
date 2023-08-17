import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCampaign, fetchCampaigns } from '../api/campaignApi';
import { AppDispatch } from '../app/store';
import { RootState } from "../app/types";
import { Button, Container, Modal, Table, Toast, ToastContainer } from 'react-bootstrap';
import './CampaignList.css'; // Stil dosyasını import edin

const CampaignList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const campaigns = useSelector((state: RootState) => state.campaign.campaigns);

  const [showToast, setShowToast] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = (campaign: any) => {
    setSelectedCampaign(campaign);
    setShowConfirmation(true);
  };

  const handleDeleteConfirmed = () => {
    // Kampanyayı silme işlemi burada
    dispatch(deleteCampaign(selectedCampaign.id));
    setShowConfirmation(false);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <Container className='mt-4'>
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Detail</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((item, index) => {
            const campaign = item.campaign;
            return (
              <tr key={campaign.id}>
                <td>{index + 1}</td>
                <td>{campaign.campaignTitle}</td>
                <td>{campaign.campaignDetail}</td>
                <td>{campaign.campaignCategory}</td>
                <td>{campaign.campaignStatus}</td>
                <td>
                  <Button variant='outline-danger' size='sm' onClick={() => handleDeleteClick(campaign)}> DELETE </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
     
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the campaign "{selectedCampaign?.campaignTitle}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowConfirmation(false)}>Cancel</Button>
          <Button variant='danger' onClick={handleDeleteConfirmed}>Delete</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-end'>
        <Toast show={showToast} onClose={() => setShowToast(false)} className={`fade-out-toast ${selectedCampaign ? 'bg-success text-white' : ''}`}>
          <Toast.Header closeButton={false}>
            <strong className='me-auto'>Notification</strong>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowToast(false)}></button>
          </Toast.Header>
          <Toast.Body className={selectedCampaign ? 'bg-success text-white' :''}>
            {selectedCampaign ? `Campaign '${selectedCampaign.campaignTitle}' has been deleted.` : ''}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </Container>

  );
};

export default CampaignList;
