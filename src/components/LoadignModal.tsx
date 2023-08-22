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
        <div className="d-flex justify-content-between align-items-center">
          <Spinner animation="grow" role="status" variant="primary" />
          <div className="mx-2">
            <span>
              İşlem Yapılıyor Lütfen Bekleyiniz.
            </span>
          </div>
          <Spinner animation="grow" role="status" variant="primary" />
        </div>
      </Modal.Body>

    </Modal>
  );
};

export default LoadingModal;
