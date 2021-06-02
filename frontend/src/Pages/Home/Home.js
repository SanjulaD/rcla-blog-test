import React from 'react'
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import PostView from '../../components/PostView/PostView';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Row style={{ marginTop: "120px" }}>
                        <LinkContainer to="/create-post">
                            <Button variant="success" size="lg" block>
                                Create New Post
                        </Button>
                        </LinkContainer>
                    </Row>
                    <Row>
                        <PostView />
                    </Row>
                </Col>
                <Col md={3}></Col>
            </Row >
        </Container >
    )
}

export default Home
