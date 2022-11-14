import React from "react";
import Container from "react-bootstrap/Container";

const MyPost = ({memories}) => {
    return(
        <>
            <Container>
                <div className="postsContainer">
                    {memories.map((memory, index) => {
                        return(
                            <div key={index} className="imgContainer">
                                <img src={memory.imageDetails.base64} alt={memory.imageDetails.name} className="post"/>
                            </div>   
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default MyPost;