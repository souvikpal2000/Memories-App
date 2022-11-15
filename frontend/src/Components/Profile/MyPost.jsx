import React from "react";
import Container from "react-bootstrap/Container";
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
                            </div>   
                        )
                    })}
                </div>}
            </Container>
        </>
    )
}

export default MyPost;