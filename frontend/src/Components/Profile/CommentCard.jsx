import React from "react";
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const CommentCard = ({comment}) => {
    return(
        <>
            <Card className="mb-2">
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted commentTitle">{comment.userName}</Card.Subtitle>
                    <Card.Text className="commentMsg">{comment.msg}</Card.Text>
                    <Card.Subtitle className="mt-1 text-muted moment">{moment(comment.createdAt).fromNow()}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default CommentCard;