import mongoose from 'mongoose'

const PostCommentSchema = mongoose.Schema({
    comment: {
        type: String,
        requried: true,
    },
}, {
    timestamps: true
})

const postsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    titleColor: {
        type: String,
        required: true
    },
    comments: [PostCommentSchema],
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postsSchema);

export default Post;