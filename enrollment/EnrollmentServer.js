import express from 'express';
import {student_router} from './routes/student_routes.js';
import {course_router} from './routes/course_routes.js';

async function startServer() {
    const app = express()
    const port = process.env.PORT | 8080
    app.use(express.urlencoded({extended: true}));//encoding
    app.use(express.json());//for parsing body

    app.get("/", (req, res) => {
        res.send({'heart': 'beating'});
    })
    app.use("/students", student_router);//routes for students
    app.use("/courses", course_router);//routes for courses

    /* Error handler middleware */
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({message: err.message});
    });

    app.listen(port, () => console.log(`Started! Listening on port ${port}`));
}

//start server
startServer().then(() => {
    console.log("Server is starting...")
});