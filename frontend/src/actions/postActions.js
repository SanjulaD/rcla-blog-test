import axios from 'axios'

import {
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    POST_LIST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,
} from './../constants/postConstants'

export const createPost = (
    title,
    description,
    titleColor,
) => async (dispatch) => {
    try {
        dispatch({
            type: POST_CREATE_REQUEST,
        })

        console.log(title)

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const { data } = await axios.post('/api/posts',
            {
                title,
                description,
                titleColor,
            },
            config
        )

        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_LIST_REQUEST,
        })


        const { data } = await axios.get(`/api/posts`)

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getPostById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: POST_DETAILS_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        }

        const { data } = await axios.get(
            `/api/posts/${id}`,
            config
        )

        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: POST_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const createPostComment = (data) => async (dispatch,) => {
    try {
        dispatch({
            type: POST_COMMENT_REQUEST,
        })

        console.log(data)

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        await axios.post(`/api/posts/${data._id}`, data, config)

        dispatch({
            type: POST_COMMENT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: POST_COMMENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}