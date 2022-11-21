import React, { useState } from "react";
import { HandThumbsUp, HandThumbsUpFill, SendFill, TrashFill, XCircleFill } from "react-bootstrap-icons"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import NoComments from "../../images/nocomment.jpg";

const DeleteModal = ({showModal, setShowModal, memories, setMemories, setModal}) => {
    const deletePost = () => {
        const updatedMemories = memories.filter((memory, index) => {
            return index != showModal.id
        });
        setMemories(updatedMemories);

        setShowModal({
            open: false,
            id: ""
        });

        setModal({
            open: false,
            memory: {}
        })
    }

    return(
        <>
            <Modal show={showModal.open} onHide={() => setShowModal({open: false, id: ""})}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Message?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You'll lose this data after this action. We can't recover them once you delete.
                    Are you sure you want to <span className="deleteSpan">permanently delete</span> it?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal({open: false, id: ""})}>Close</Button>
                    <Button variant="danger" onClick={deletePost}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const ViewPostModal = ({modal, setModal, profile, memories, setMemories}) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [like, setLike] = useState(false);
    const [showModal, setShowModal] = useState({
        open: false,
        id: ""
    });

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
                                <div className="deleteClose">
                                    <TrashFill className="trashBtn" onClick={() => setShowModal({open: true, id: modal.id})}/>
                                    <XCircleFill onClick={closeModal} className="closeBtn"/>
                                </div>
                            </Modal.Header>
                            <div className="captionContainer">
                                <p>{modal.memory?.caption}</p>
                            </div>
                            <div className="replyContainer">
                                { modal.memory?.comments?.length === 0? 
                                <div className="noCommentsContainer">
                                    <img src={NoComments} alt="No Comments" />
                                </div> : 
                                <div className="repliesContainer">
                                    
                                </div> }
                            </div>
                            <div className="replyFormContainer">
                                {like? <HandThumbsUpFill className="likeIcon" onClick={() => setLike(false)}/> : <HandThumbsUp className="likeIcon" onClick={() => setLike(true)} />}
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Add a comment..." />
                                    <Button variant="primary"><SendFill/></Button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <DeleteModal showModal={showModal} setShowModal={setShowModal} memories={memories} setMemories={setMemories} setModal={setModal} />
        </>
    )
}

export default ViewPostModal;