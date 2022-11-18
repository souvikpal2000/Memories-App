import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';

const ViewPostModal = ({modal, setModal, profile}) => {
    const [fullscreen, setFullscreen] = useState(true);

    const closeModal = () => {
        setModal({
            open: false,
            memory: {}
        })
    }

    return(
        <>
            <Modal fullscreen={fullscreen} animation={false} show={modal.open} contentClassName="viewModal" centered>
                <Modal.Body>
                    <div className="postContainer">
                        <div className="postImgContainer">
                            <img src={modal.memory?.imageDetails?.base64} alt={modal.memory?.imageDetails?.name} />
                        </div>
                        <div className="commentsContainer">
                            <Modal.Header>
                                <h6>{profile.userName}</h6>
                                <p onClick={closeModal} className="closeBtn">❌</p>
                            </Modal.Header>
                            <div className="captionReplyContainer">
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="Add a comment..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <Button variant="primary" id="button-addon2">Post</Button>
                            </InputGroup>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewPostModal;