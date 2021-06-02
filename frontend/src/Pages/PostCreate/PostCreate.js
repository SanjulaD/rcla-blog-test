import React, { useState } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../components/Message/Message'
import Loader from './../../components/Loader/Loader'

import { createPost } from './../../actions/postActions'

const PostCreate = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [titleColor, setTitleColor] = useState("")

    const postCreate = useSelector(state => state.postCreate)
    const { loading, success, error } = postCreate

    const submitHandler = (e) => {
        dispatch(createPost(
            title,
            description,
            titleColor
        ))
        e.preventDefault()
    }

    return (
        <Container style={{ marginBottom: "100px", marginTop: "20px" }}>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='danger'>{success}</Message>}
            <Form onSubmit={submitHandler} style={{ marginTop: "120px" }}>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h3 className="text-center mb-3">Create Post</h3>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="title"
                                placeholder="Enter title name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col md={6}>
                                    <Form.Label>Title Color</Form.Label>
                                </Col>
                                <Col md={6}>
                                    <Button
                                        className="mr-2"
                                        style={{ padding: "20px", backgroundColor: "blue" }}
                                        onClick={() => setTitleColor("blue")}
                                    ></Button>
                                    <Button
                                        className="mr-2"
                                        style={{ padding: "20px", backgroundColor: "yellow" }}
                                        onClick={() => setTitleColor("yellow")}
                                    ></Button>
                                    <Button
                                        style={{ padding: "20px", backgroundColor: "red" }}
                                        onClick={() => setTitleColor("red")}
                                    ></Button>
                                </Col>
                                <Button className="mt-3" size="lg" block type="submit" variant="success">Publish</Button>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Form>
        </Container>
    )

}

export default PostCreate