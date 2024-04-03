import express from 'express';
import * as courses from '../services/course_services.js'

const course_router = express.Router();

/* GET . */
course_router.get('/', async function (req, res, next) {
    try {
        res.json(await courses.getAll());
    } catch (err) {
        console.error(`Error while getting Course `, err.message);
        next(err);
    }
});

course_router.get('/:id', async function (req, res, next) {
    try {
        res.json(await courses.getCourseById(req.params.id));
    } catch (err) {
        console.error(`Error while getting Course `, err.message);
        next(err);
    }
});

/* POST todos */
course_router.post('/', async function(req, res, next) {
    try {
        res.json(await courses.create(req.body));
    } catch (err) {
        console.error(`Error while creating course`, err.message);
        next(err);
    }
});

export {course_router};