import React, { useState } from "react";
import { HandThumbsUp, HandThumbsUpFill, SendFill } from "react-bootstrap-icons"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import NoComments from "../../images/nocomment.jpg";

const ViewPostModal = ({modal, setModal, profile}) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [like, setLike] = useState(false);

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
                            <div className="captionContainer">
                                <p>{modal.memory?.caption}</p>
                            </div>
                            <div className="replyContainer">
                                {modal.memory?.comments?.length === 0? 
                                <div className="noCommentsContainer">
                                    <img src={NoComments} alt="No Comments" />
                                </div> : 
                                <div className="repliesContainer">
                                    
                                </div>}
                            </div>
                            <div className="replyFormContainer">
                                {like? <HandThumbsUpFill className="like" onClick={() => setLike(false)}/> : <HandThumbsUp className="like" onClick={() => setLike(true)} />}
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Add a comment..." />
                                    <Button variant="primary"><SendFill/></Button>
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