import express from 'express'
const router = express.Router()

import {
    createPost,
    getPosts,
    getPostById,
    createPostComment
} from './../controllers/posts-services.js'

router.route('/').post(createPost).get(getPosts)
router
    .route('/:id')
    .get(getPostById)
    .post(createPostComment)

export default router