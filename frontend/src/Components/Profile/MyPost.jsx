import React from "react";
import Container from "react-bootstrap/Container";
import { HandThumbsUpFill, ChatFill } from "react-bootstrap-icons";
import NoPostsYet from "../../images/nopostsyet.jpg";

const MyPost = ({memories}) => {
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
                                <div class="overlay">
                                    <div className="likeComment">
                                        <div className="likeContainer">
                                            <HandThumbsUpFill className="like"/>
                                            <p>0</p>
                                        </div> 
                                        <span className="break"></span>
                                        <div className="commentContainer">
                                            <ChatFill className="comment"/>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
                </div>}
            </Container>
        </>
    )
}

export default MyPost;