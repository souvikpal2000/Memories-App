import React from "react";

const MyPost = ({memories}) => {
    return(
        <>
            {memories.map((memory, index) => {
                return(
                    <div key={index}>
                        <img src={memory.imageDetails.base64} alt={memory.imageDetails.name} />
                    </div>     
                )
            })}
        </>
    )
}

export default MyPost;