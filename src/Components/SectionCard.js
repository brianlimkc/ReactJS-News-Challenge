import React from 'react';
import {Card,Button} from "react-bootstrap";

function SectionCard({article}) {

    return (
        <Card style={{ height: '25rem' }}>
            <Card.Img className={`card-img-top`} variant="top" src={(article.urlToImage && article.urlToImage !== "") ? article.urlToImage : "https://i.imgur.com/bTjJrZi.png"} />
            <Card.Body className={`d-flex flex-column`}>
                <Card.Title className={`crop-text-3`}>{article.title && article.title.substring(0,70)}</Card.Title>
                <Card.Text className={`crop-text-5`}>
                    {article.description && article.description}
                </Card.Text>
                <Button className={`mt-auto`} variant="primary" href={article.url && article.url}>Read More</Button>
            </Card.Body>
        </Card>
    );
}

export default SectionCard;
