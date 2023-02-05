import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import ConvertBase64 from "../../FileBase64/ConvertBase64";

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

    const uploadImage = async (event) => {
        try{
            const file = event.target.files[0];
            const base64 = await ConvertBase64(file);
            const fileName = event.target.files[0].name
    
            const n = base64.length;
            const x = base64.endsWith("==") === true? 2 : base64.endsWith("=") === true? 1 : 0;
            const fileSize = (n * 0.75) - x; // File Size in bytes
            const fileType = fileName.substring(fileName.lastIndexOf("."));
    
            const acceptedType = ['.jpeg', '.png'];
    
            if(acceptedType.includes(fileType) === false){
                setAlert({
                    type: "danger",
                    message: "Supported File Type - jpeg/png"
                })
                event.target.value = null;
                return;
            }
            if(fileSize > 10000000){ // File Upload limited upto 10mb
                setAlert({
                    type: "danger",
                    message: "File Size must be less than 10mb"
                });
                event.target.value = null;
                return;
            }
            setPost((preValue) => {
                return {
                    ...preValue,
                    imageDetails: {
                        name: fileName,
                        base64: base64,
                        size: fileSize
                    },
                    createdAt: new Date()
                }
            });
            setAlert("");
        }catch(err){
            console.log(err);
        }
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
        newMemories.push(post);
        newMemories.sort((a,b) => {
            return b.createdAt - a.createdAt;
        });
        setMemories(newMemories);

        setPost({
            caption: "",
            imageDetails: {},
            likes: [],
            comments: [],
            createdAt: ""
        });
        setCaptionCounter(0);
    }

    const preventEnterPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
        }
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
                            <Form.Control as="textarea" rows={3} name="caption" value={post.caption} onChange={setCaption} onKeyDown={preventEnterPress}/>
                            <span className="countLabel">{captionCounter} / 120</span>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={uploadImage}/>
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