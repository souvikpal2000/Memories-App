import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FileBase64 from "react-file-base64";

const AddPostModal = ({addPostModal, setAddPostModal, memories, setMemories}) => {
    const [post, setPost] = useState({
        caption: "",
        imageDetails: "",
        createdAt: new Date()
    });

    const closeAddPostModal = () => {
        setAddPostModal(false);
    }

    const uploadImage = (base64) => {
        setPost((preValue) => {
            return {
                ...preValue,
                imageDetails: base64
            }
        });
    }

    const savePost = () => {
        setAddPostModal(false);
        let newMemories = memories;
        memories.push(post);
        setMemories(newMemories);
    }

    return(
        <>
            <Modal show={addPostModal} onHide={closeAddPostModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="addPostForm">
                        <Form.Group className="mb-3">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control as="textarea" rows={3} name="caption" onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <div className="fileDiv fileInputField">
                                <FileBase64 name="profilePic" type="file" multiple={false} onDone={uploadImage}/>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAddPostModal}>Close</Button>
                    <Button variant="primary" onClick={savePost}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddPostModal;