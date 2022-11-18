import React from "react";
import Container from "react-bootstrap/Container";
import { HandThumbsUpFill, ChatFill } from "react-bootstrap-icons";
import NoPostsYet from "../../images/nopostsyet.jpg";
import ViewPostModal from "./ViewPostModal";
import { useState } from "react";

const MyPost = ({memories, profile}) => {
    const [modal, setModal] = useState({
        open: false,
        memory: {}
    });

    const openModal = (e) => {
        const index = e.currentTarget.getAttribute("memoryid");
        setModal({
            open: true,
            memory: memories[index]
        })
    }

    return(
        <>
            <Container>
                {memories.length === 0? 
                <div className="nopostsyet">
                    <img src={NoPostsYet} alt="NoPostsYet" />
                </div> : 
                <div className="postsContainer">
                    {memories.map((memory, index) => {
                        return(
                            <div key={index} className="imgContainer">
                                <img src={memory.imageDetails.base64} alt={memory.imageDetails.name} className="post"/>
                                <div className="overlay" memoryid={index} onClick={openModal}>
                                    <div className="likeComment">
                                        <div className="likeContainer">
                                            <HandThumbsUpFill className="like"/>
                                            <p>{memory.likes.length}</p>
                                        </div> 
                                        <span className="break"></span>
                                        <div className="commentContainer">
                                            <ChatFill className="comment"/>
                                            <p>{memory.comments.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
                </div>}
            </Container>

            <ViewPostModal modal={modal} setModal={setModal} profile={profile} />
        </>
    )
}

export default MyPost;