import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = ({ article }) => {

    const { title, description } = article;

    return (
        <Card className="">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Learn More</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default News;