import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ViewPostModal = ({modal, setModal}) => {

    const closeModal = () => {
        setModal({
            open: false,
            memory: {}
        })
    }

    return(
        <>
            <Modal size="lg" show={modal.open} onHide={closeModal} centered dialogClassName="viewModal" contentClassName="myModal">
                <Modal.Body>
                    <div className="postContainer">
                        <div className="postImgContainer">
                            <img src={modal.memory?.imageDetails?.base64} alt={modal.memory?.imageDetails?.name} />
                        </div>
                        <div className="commentContainer">
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewPostModal;