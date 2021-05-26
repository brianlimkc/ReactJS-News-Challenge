import React from 'react';
import {Card, Button} from "react-bootstrap";

function PageCard({article}) {

    return (
        <Card style={{ width: '21rem'}}>
            <Card.Img variant="top" src={article.urlToImage && article.urlToImage} />
            <Card.Body>
                <Card.Title className={`crop-text-3`}>{article.title && article.title}</Card.Title>
                <Card.Text className={`crop-text-5`}>
                    {article.description && article.description}
                </Card.Text>
                <Button variant="primary" href={article.url && article.url}>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default PageCard;
