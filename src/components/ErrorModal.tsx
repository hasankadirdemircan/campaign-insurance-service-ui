import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/campaignSlice';
import { Modal, Spinner } from 'react-bootstrap';
import { RootState } from '../store/types';

const ErrorModal: React.FC = () => {
    const dispatch = useDispatch();
    const error = useSelector((state: RootState) => state.campaign.error);

    const closeModal = () => {
        dispatch(clearError()); // Hata modalını kapatırken hatayı temizle
    };
    console.log("errrorrr")
    console.log(error)
    return (
        <Modal show={!!error} backdrop="static" keyboard={false} centered onHide={closeModal}>
            <Modal.Body className="modal-content">
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className="mx-2">
                        <span>{error || 'İşlem Yapılıyor Lütfen Bekleyiniz.'}</span>
                    </div>
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ErrorModal;
