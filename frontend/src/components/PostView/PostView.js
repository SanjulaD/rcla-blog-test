import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../Message/Message'
import Loader from './../Loader/Loader'

import { listPosts } from './../../actions/postActions'

const PostView = () => {

    const dispatch = useDispatch()
    let history = useHistory()

    const postList = useSelector(state => state.postList)
    const { loading, error, post } = postList

    const postView = (id) => {
        history.push(`/post/${id}`)
    }

    useEffect(() => {
        dispatch(listPosts())
    }, [dispatch])

    return (
        <>
            {
                loading ? <Loader /> :
                    error ? <Message variant='danger'>{error}</Message>
                        : (
                            post.map(postItem => (
                                <Card key={postItem._id} border="primary" style={{ width: '100%', marginBottom: "20px", marginTop: "20px" }}>
                                    <Card.Header style={{backgroundColor: postItem.titleColor}}><b>{postItem.title}</b></Card.Header>
                                    <Card.Body>
                                        <Card.Text>{postItem.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col md={9}>
                                                <small className="text-muted">Comment</small>
                                            </Col>
                                            <Col md={3}>
                                                <Button
                                                    variant="primary"
                                                    onClick={() => postView(postItem._id)}
                                                >View</Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            ))
                        )
            }
        </>
    )
}

export default PostView
