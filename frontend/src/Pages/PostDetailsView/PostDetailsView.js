import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Button, Card, Col, Row, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../components/Message/Message'
import Loader from './../../components/Loader/Loader'

import { getPostById, createPostComment } from './../../actions/postActions'

const PostDetailsView = () => {

    const [comment, setComment] = useState("")

    const dispatch = useDispatch()

    const { id } = useParams()

    const postDetails = useSelector(state => state.postDetails)
    const { loading, error, post } = postDetails

    const postCommentCreate = useSelector(state => state.postCommentCreate)
    const { loading: loadingUpdate, error: errorUpdate, success } = postCommentCreate

    useEffect(() => {
        dispatch(getPostById(id))
    }, [dispatch, success])

    const submitHandler = (e) => {
        dispatch(createPostComment(
            {
                _id: id,
                comment,
            }
        ))
        e.preventDefault()
        setComment("")
    }

    return (
        <Container style={{ marginTop: "120px" }}>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading && <Loader />}
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    {success && (
                        <Message variant='success'>
                            Review submitted successfully
                        </Message>
                    )}
                    {
                        loading ? <Loader /> :
                            error ? <Message variant='danger'>{error}</Message>
                                : (
                                    <Card key={post._id} border="primary" style={{ width: '100%', marginBottom: "20px", marginTop: "20px" }}>
                                        <Card.Header className="text-center"><b>{post.title}</b></Card.Header>
                                        <Card.Body>
                                            <Card.Text>{post.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col md={9}>
                                                {JSON.stringify(post.comments)}
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                        <Container>
                                            <Form onSubmit={submitHandler}>
                                                <Form.Group controlId='comment'>
                                                    <Form.Label>Add Comment</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="comment"
                                                        placeholder="Enter Comment"
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                    ></Form.Control>
                                                </Form.Group>
                                                <Button className="mr-3 mb-3" size="lg" block type="submit" variant="success">Comment</Button>
                                            </Form>
                                        </Container>
                                    </Card>
                                )
                    }
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default PostDetailsView
