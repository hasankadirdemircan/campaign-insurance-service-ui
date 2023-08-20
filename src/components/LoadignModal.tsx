import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../store/types";
import { Modal, Spinner } from 'react-bootstrap';

const LoadingModal: React.FC = () => {
  const loading = useSelector((state: RootState) => state.campaign.loading);

  return (
    <Modal
      show={loading}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body className='modal-content'>
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoadingModal;
