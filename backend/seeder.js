import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

// import data
import posts from './data/posts.js';

// import models
import Post from './models/postsModel.js';

// connect db
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async () => {
    try {

        // delete data if already exists
        await Post.deleteMany();;

        // add houses to the database
        const samplePosts = posts.map(post => {
            return { ...post }
        })
        await Post.insertMany(samplePosts)

        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        // delete data if already exists
        await Post.deleteMany();

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}




