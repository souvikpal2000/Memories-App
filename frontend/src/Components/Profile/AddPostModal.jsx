import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const AddPostModal = ({addPostModal, setAddPostModal, memories, setMemories}) => {
    const [post, setPost] = useState({
        caption: "",
        imageDetails: {},
        likes: [],
        comments: [],
        createdAt: ""
    });
    const [captionCounter, setCaptionCounter] = useState(0);
    const [alert, setAlert] = useState("");

    const closeAddPostModal = () => {
        setAddPostModal(false);
        setAlert("");
        setPost({
            caption: "",
            imageDetails: {},
            likes: [],
            comments: [],
            createdAt: ""
        });
        setCaptionCounter(0);
    }

    const setCaption = (e) => {
        const length = e.target.value.length
        if(length <= 120){
            setPost({
                ...post, 
                [e.target.name]: e.target.value
            });
            setCaptionCounter(length);
        }
    }

    const uploadImage = (base64) => {
        const fileType = ['image/jpeg', 'image/png'];
        if(fileType.includes(base64.type) === false){
            setAlert({
                type: "danger",
                message: "Supported File Type - jpeg/png"
            })
            return;
        }
        setPost((preValue) => {
            return {
                ...preValue,
                imageDetails: base64,
                createdAt: new Date()
            }
        });
    }

    const savePost = () => {
        if(Object.keys(post.imageDetails).length === 0){
            setAlert({
                type: "warning",
                message: "Upload Image"
            })
            return;
        }
        setAddPostModal(false);
        let newMemories = memories;
        memories.push(post);
        setMemories(newMemories);

        setPost({
            caption: "",
            imageDetails: {},
            likes: [],
            comments: [],
            createdAt: ""
        })
    }

    return(
        <>
            <Modal show={addPostModal} onHide={closeAddPostModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {   
                        alert && 
                        <Alert variant={alert.type} onClose={() => setAlert("")} dismissible>
                            <p>{alert.message}</p>
                        </Alert>
                    }
                    <Form className="addPostForm">
                        <Form.Group className="mb-3">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control as="textarea" rows={3} name="caption" value={post.caption} onChange={setCaption}/>
                            <span className="countLabel">{captionCounter} / 120</span>
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