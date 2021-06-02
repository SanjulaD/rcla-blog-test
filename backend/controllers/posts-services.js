import express from 'express'
import asyncHandler from 'express-async-handler'
import Post from './../models/postsModel.js';

// @desc    Create Post
// @rout    POST /api/posts/
// @access  User
const createPost = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        titleColor
    } = req.body

    const post = await Post.create({
        title,
        description,
        titleColor
    })

    if (post) {
        res.status(201).json({
            _id: post._id,
            title: post.title,
            description: post.description,
            titleColor: post.titleColor,
        })
    } else {
        res.status(400)
        throw new Error('Invalid post data')
    }
})


// @desc    Get posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})

// @desc    Fetch post by id
// @rout    GET /post/:id
// @access  public
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
        res.json(post);
    } else {
        res.status(404)
        throw new Error('Winning not Found')
    }
})

// @desc    Update post Comment
// @rout    POST /post/:id/comment
// @access  private/ Admin
const createPostComment = asyncHandler(async (req, res) => {
    const { comment } = req.body

    const post = await Post.findById(req.params.id)

    if (post) {

        const review = {
            comment,
        }

        post.comments.push(review)

        await post.save()

        res.status(201).json({ message: 'Comment added' })

    } else {
        res.status(401)
        throw new Error('Post not found')
    }
})

export {
    createPost,
    getPosts,
    getPostById,
    createPostComment
}